"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

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
    .min(3, "الاسم يجب أن يكون 3 أحرف على الأقل")
    .max(100, "الاسم طويل جداً")
    .regex(/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF a-zA-Z\s'-]+$/, "الاسم يحتوي على رموز غير مسموح بها"),
  phone: z
    .string()
    .trim()
    .min(9, "رقم الجوال غير صحيح")
    .max(20, "رقم الجوال غير صحيح")
    .regex(/^[0-9+\-\s()]+$/, "رقم الجوال يجب أن يحتوي على أرقام فقط"),
  email: z
    .string()
    .trim()
    .email("البريد الإلكتروني غير صحيح")
    .max(254, "البريد الإلكتروني طويل جداً"),
  service: z
    .string()
    .refine((val) => ALLOWED_SERVICES.includes(val as typeof ALLOWED_SERVICES[number]), {
      message: "يرجى اختيار خدمة صحيحة من القائمة",
    }),
  message: z
    .string()
    .trim()
    .min(10, "الرسالة يجب أن تكون 10 أحرف على الأقل")
    .max(2000, "الرسالة طويلة جداً (الحد الأقصى 2000 حرف)"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("server_error");

      toast.custom(() => (
        <div className="flex items-start gap-4 bg-white border border-stone-100 rounded-2xl shadow-2xl px-5 py-4 min-w-[320px] font-body" dir="rtl">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a93818] to-[#f16c48] flex items-center justify-center shrink-0 shadow-lg shadow-[#f16c48]/30">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-stone-900 text-[15px]">تم إرسال طلبك بنجاح! 🎉</p>
            <p className="text-stone-500 text-sm mt-0.5">سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن.</p>
          </div>
        </div>
      ));
      reset();
    } catch {
      toast.custom(() => (
        <div className="flex items-start gap-4 bg-white border border-red-100 rounded-2xl shadow-2xl px-5 py-4 min-w-[320px] font-body" dir="rtl">
          <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center shrink-0 shadow-lg shadow-red-500/30">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-white fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </div>
          <div>
            <p className="font-bold text-stone-900 text-[15px]">عذراً، حدث خطأ</p>
            <p className="text-stone-500 text-sm mt-0.5">يرجى المحاولة مرة أخرى أو التواصل معنا عبر الهاتف.</p>
          </div>
        </div>
      ));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-32 bg-stone-50 dark:bg-stone-950 relative overflow-hidden" id="contact">
      {/* Background Decor */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 start-0 w-[600px] h-[600px] bg-gradient-to-br from-[#f16c48]/10 to-transparent rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 end-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#a93818]/10 to-transparent rounded-full blur-[100px] translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text Side (Right side in RTL) */}
          <div className="text-start flex flex-col items-start order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-4 justify-start">
              <svg width="9" height="40" viewBox="0 0 9 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.526367 0H4.52637C6.73551 0 8.52637 1.79086 8.52637 4V36C8.52637 38.2091 6.73551 40 4.52637 40H0.526367V0Z" fill="url(#paint0_linear_10_337_c)"></path>
                <defs>
                  <linearGradient id="paint0_linear_10_337_c" x1="0.526367" y1="18.3055" x2="8.52637" y2="18.3055" gradientUnits="userSpaceOnUse">
                    <stop offset="0.015625" stopColor="#F58B52"></stop>
                    <stop offset="0.505208" stopColor="#ED2436"></stop>
                    <stop offset="1" stopColor="#F8B661"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold tracking-[0.2em] text-[#a93818] dark:text-[#f16c48] uppercase text-sm border border-[#f16c48]/30 px-4 py-1.5 rounded-full bg-[#f16c48]/5">
                تواصل معنا
              </span>
            </div>

            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-black text-stone-950 dark:text-white mb-8 leading-[1.2]">
              دعنا نبدأ في <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a93818] to-[#f16c48]">تأمين</span> منشأتك اليوم
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-12 max-w-lg">
              فريقنا المتخصص جاهز للرد على جميع استفساراتكم وتقديم الاستشارات الفنية اللازمة لضمان سلامة منشآتكم وفق أعلى المعايير المعتمدة.
            </p>

            {/* Contact Info Card */}
            <div className="space-y-6 w-full max-w-md bg-white dark:bg-stone-900/50 p-8 rounded-3xl border border-stone-100 dark:border-stone-800 shadow-xl shadow-stone-200/20 dark:shadow-none">
              <div className="flex items-center justify-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#f16c48]/10 flex items-center justify-center text-[#f16c48] group-hover:bg-[#f16c48] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-stone-950 dark:text-white group-hover:text-[#f16c48] transition-colors mb-1">اتصال مباشر</h4>
                  <a href="tel:+966540029592" className="text-stone-500 font-medium" dir="ltr">+966 54 002 9592</a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-stone-100 dark:bg-stone-800"></div>
              <div className="flex items-center justify-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#f16c48]/10 flex items-center justify-center text-[#f16c48] group-hover:bg-[#f16c48] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-stone-950 dark:text-white group-hover:text-[#f16c48] transition-colors mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:osamadev921@gmail.com" className="text-stone-500 font-medium">info@barqalmasia.net</a>
                </div>
              </div>
              <div className="w-full h-[1px] bg-stone-100 dark:bg-stone-800"></div>
              <div className="flex items-center justify-start gap-6 group">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#f16c48]/10 flex items-center justify-center text-[#f16c48] group-hover:bg-[#f16c48] group-hover:text-white transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="text-start">
                  <h4 className="font-bold text-stone-950 dark:text-white group-hover:text-[#f16c48] transition-colors mb-1">المقر الرئيسي</h4>
                  <a href="https://maps.app.goo.gl/VS8hztGGCPpbDrBz8" target="_blank" rel="noopener noreferrer" className="text-stone-500 font-medium">المملكة العربية السعودية، الرياض</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (Left side in RTL) */}
          <div className="bg-white dark:bg-stone-900/80 p-8 sm:p-10 lg:p-12 rounded-[3rem] border border-stone-100 dark:border-stone-800 shadow-2xl shadow-stone-200/50 dark:shadow-none backdrop-blur-xl order-1 lg:order-2">
            <div className="mb-10 text-start">
              <h3 className="text-3xl font-black text-stone-950 dark:text-white mb-3">أرسل طلبك الآن</h3>
              <p className="text-stone-500 dark:text-stone-400">يرجى تعبئة النموذج وسيقوم فريقنا بالتواصل معك فوراً.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-start">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ms-1 block">الاسم بالكامل</label>
                  <input
                    type="text"
                    placeholder="أدخل اسمك"
                    {...register("fullName")}
                    className={`w-full bg-stone-50 dark:bg-stone-950 text-white border ${errors.fullName ? 'border-red-500' : 'border-stone-200 dark:border-stone-800'} rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#f16c48] focus:border-[#f16c48] outline-none transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600`}
                  />
                  {errors.fullName && <span className="text-red-500 text-xs font-bold px-2">{errors.fullName.message}</span>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ms-1 block">رقم الجوال</label>
                  <input
                    type="tel"
                    placeholder="05xxxxxxx"
                    {...register("phone")}
                    className={`w-full bg-stone-50 dark:bg-stone-950 text-white border ${errors.phone ? 'border-red-500' : 'border-stone-200 dark:border-stone-800'} rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#f16c48] focus:border-[#f16c48] outline-none transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600 text-end`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs font-bold px-2">{errors.phone.message}</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ms-1 block">البريد الإلكتروني</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    {...register("email")}
                    className={`w-full bg-stone-50 dark:bg-stone-950 text-white border ${errors.email ? 'border-red-500' : 'border-stone-200 dark:border-stone-800'} rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#f16c48] focus:border-[#f16c48] outline-none transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600 text-end`}
                  />
                  {errors.email && <span className="text-red-500 text-xs font-bold px-2">{errors.email.message}</span>}
                </div>
                <div className="space-y-2 relative">
                  <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ms-1 block">نوع الخدمة المطلوبة</label>
                  <div className="relative">
                    <select
                      {...register("service")}
                      className={`w-full bg-stone-50 dark:bg-stone-950 border ${errors.service ? 'border-red-500' : 'border-stone-200 dark:border-stone-800'} rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#f16c48] focus:border-[#f16c48] outline-none transition-all text-stone-600 dark:text-stone-300 appearance-none cursor-pointer`}
                    >
                      <option value="" disabled hidden>اختر الخدمة</option>
                      <option value="توريد وتركيب أجهزة مكافحة الحريق">توريد وتركيب أجهزة مكافحة الحريق</option>
                      <option value="عقود الصيانة الوقائية للسلامة">عقود الصيانة الوقائية للسلامة</option>
                      <option value="أنظمة كاميرات المراقبة الأمنية">أنظمة كاميرات المراقبة الأمنية</option>
                      <option value="أنظمة الإنذار المبكر الذكية">أنظمة الإنذار المبكر الذكية</option>
                      <option value="تصميم المخططات الهندسية للسلامة">تصميم المخططات الهندسية للسلامة</option>
                      <option value="تعبئة وصيانة طفايات الحريق">تعبئة وصيانة طفايات الحريق</option>
                      <option value="أخرى">أخرى</option>
                    </select>
                    <div className="absolute inset-y-0 end-0 flex items-center pe-5 pointer-events-none text-stone-400">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                  {errors.service && <span className="text-red-500 text-xs font-bold px-2">{errors.service.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700 dark:text-stone-300 ms-1 block">الرسالة أو التفاصيل</label>
                <textarea
                  rows={4}
                  {...register("message")}
                  placeholder="حدثنا أكثر عن متطلبات منشأتك..."
                  className={`w-full bg-stone-50 dark:bg-stone-950 text-white border ${errors.message ? 'border-red-500' : 'border-stone-200 dark:border-stone-800'} rounded-2xl px-5 py-4 focus:ring-2 focus:ring-[#f16c48] focus:border-[#f16c48] outline-none transition-all placeholder:text-stone-400 dark:placeholder:text-stone-600 resize-none`}
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs font-bold px-2">{errors.message.message}</span>}
              </div>

              <button
                disabled={isSubmitting}
                className="w-full relative overflow-hidden group bg-stone-950 dark:bg-white text-white dark:text-stone-950 font-bold py-5 rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-1 mt-4 cursor-pointer disabled:opacity-70 disabled:hover:translate-y-0"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#a93818] to-[#f16c48] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  {isSubmitting ? (
                    <span className="animate-pulse">جاري الإرسال...</span>
                  ) : (
                    <>
                      إرسال الطلب الآن
                      <span className="material-symbols-outlined text-xl rtl:-scale-x-100 group-hover:-translate-x-1 transition-transform">arrow_forward</span>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
