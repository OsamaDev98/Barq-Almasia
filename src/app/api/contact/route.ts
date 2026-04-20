import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import * as z from "zod";

// ─── Rate Limiting ────────────────────────────────────────────────────────────
// Simple in-memory store (resets on server restart)
const rateLimitStore = new Map<string, { count: number; firstRequest: number }>();
const RATE_LIMIT_MAX = 5;        // max submissions
const RATE_LIMIT_WINDOW = 60_000; // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now - entry.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitStore.set(ip, { count: 1, firstRequest: now });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count++;
  return false;
}

// ─── Server-Side Validation Schema ───────────────────────────────────────────
const ALLOWED_SERVICES = [
  "توريد وتركيب أجهزة مكافحة الحريق",
  "عقود الصيانة الوقائية للسلامة",
  "أنظمة كاميرات المراقبة الأمنية",
  "أنظمة الإنذار المبكر الذكية",
  "تصميم المخططات الهندسية للسلامة",
  "تعبئة وصيانة طفايات الحريق",
  "أخرى",
] as const;

const contactSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3)
    .max(100)
    .regex(/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF a-zA-Z\s'-]+$/),
  phone: z
    .string()
    .trim()
    .min(9)
    .max(20)
    .regex(/^[0-9+\-\s()]+$/),
  email: z
    .string()
    .trim()
    .email()
    .max(254),
  service: z
    .string()
    .refine((val) => ALLOWED_SERVICES.includes(val as typeof ALLOWED_SERVICES[number])),
  message: z
    .string()
    .trim()
    .min(10)
    .max(2000),
});

// ─── HTML Escape to prevent XSS in email body ─────────────────────────────────
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\n/g, "<br>");
}

// ─── Route Handler ────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  try {
    // 1. Check Content-Type
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ error: "Invalid request" }, { status: 415 });
    }

    // 2. Rate limiting by IP
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "لقد تجاوزت الحد المسموح به. يرجى المحاولة لاحقاً." },
        { status: 429 }
      );
    }

    // 3. Parse and validate body on the server (never trust the client)
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(rawBody);
    if (!parsed.success) {
      // Generic error — do not leak which field failed to prevent enumeration
      return NextResponse.json({ error: "Invalid request data" }, { status: 422 });
    }

    const { fullName, phone, email, service, message } = parsed.data;

    // 4. Build the professional email using ESCAPED values only
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f1f5f9;
            color: #0f172a;
            line-height: 1.6;
          }
          .wrapper { padding: 40px 20px; }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0,0,0,0.08);
          }
          .header {
            background: linear-gradient(135deg, #a93818 0%, #f16c48 100%);
            padding: 36px 40px;
            text-align: center;
          }
          .header-badge {
            display: inline-block;
            background: rgba(255,255,255,0.2);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            padding: 4px 14px;
            border-radius: 99px;
            margin-bottom: 16px;
          }
          .header h1 {
            color: white;
            font-size: 26px;
            font-weight: 800;
            margin: 0;
          }
          .header p {
            color: rgba(255,255,255,0.8);
            font-size: 14px;
            margin-top: 8px;
          }
          .content { padding: 36px 40px; }
          .field {
            padding: 16px 0;
            border-bottom: 1px solid #f1f5f9;
          }
          .field:last-child { border-bottom: none; padding-bottom: 0; }
          .field-label {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            color: #94a3b8;
            margin-bottom: 6px;
          }
          .field-value {
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
          }
          .field-value.service {
            display: inline-block;
            background: linear-gradient(135deg, #a93818, #f16c48);
            color: white;
            padding: 4px 14px;
            border-radius: 99px;
            font-size: 14px;
          }
          .message-box {
            background: #f8fafc;
            padding: 18px 20px;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            font-size: 15px;
            color: #334155;
            font-weight: 400;
            margin-top: 6px;
          }
          .footer {
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            padding: 20px 40px;
            text-align: center;
            font-size: 12px;
            color: #94a3b8;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <div class="header-badge">طلب جديد</div>
              <h1>طلب خدمة جديد</h1>
              <p>تم استلام هذا الطلب عبر الموقع الإلكتروني</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">اسم العميل</div>
                <div class="field-value">${escapeHtml(fullName)}</div>
              </div>
              <div class="field">
                <div class="field-label">رقم الجوال</div>
                <div class="field-value" dir="ltr" style="text-align:right;">${escapeHtml(phone)}</div>
              </div>
              <div class="field">
                <div class="field-label">البريد الإلكتروني</div>
                <div class="field-value">${escapeHtml(email)}</div>
              </div>
              <div class="field">
                <div class="field-label">الخدمة المطلوبة</div>
                <div class="field-value">
                  <span class="service">${escapeHtml(service)}</span>
                </div>
              </div>
              <div class="field">
                <div class="field-label">تفاصيل الطلب</div>
                <div class="message-box">${escapeHtml(message)}</div>
              </div>
            </div>
            <div class="footer">
              © برق الماسية لأجهزة الأمن والسلامة — barqalmasia.com
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"موقع برق الماسية" <${process.env.SMTP_EMAIL}>`,
      to: "osamadev921@gmail.com",
      replyTo: email, // Reply directly to the customer
      subject: `طلب خدمة جديد: ${escapeHtml(service)} — ${escapeHtml(fullName)}`,
      html: htmlTemplate,
    });

    return NextResponse.json({ message: "تم إرسال الطلب بنجاح" }, { status: 200 });

  } catch (error) {
    // Log the real error server-side only, never expose to client
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "حدث خطأ أثناء معالجة الطلب" }, { status: 500 });
  }
}
