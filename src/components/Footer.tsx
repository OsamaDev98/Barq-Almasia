import Link from "next/link";
import Image from "next/image";
import logo from "../assets/logo.webp";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white pt-24 pb-12 relative overflow-hidden border-t border-stone-800">
      {/* Background Accent */}
      <div className="absolute top-0 end-0 w-[500px] h-[500px] bg-[#f16c48]/5 rounded-full blur-[120px] -translate-y-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2"></div>
      <div className="absolute bottom-0 start-0 w-[500px] h-[500px] bg-[#a93818]/5 rounded-full blur-[120px] translate-y-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2"></div>

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Info */}
          <div className="flex flex-col space-y-8 text-start lg:col-span-1">
            <div className="flex items-center gap-4 self-start">
              <div className="relative h-20 w-auto flex shrink-0 items-center justify-center transition-transform duration-300 hover:scale-105">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="شركة برق الماسية"
                    className="h-full w-40 object-contain transition-all duration-500"
                    priority
                  />
                </Link>
              </div>
            </div>
            <p className="text-stone-400 font-body leading-relaxed text-sm md:text-base">
              رواد في مجال أنظمة السلامة والوقاية من الحريق في المملكة العربية السعودية، نسعى دائمًا للتميز والابتكار لحماية الأرواح والممتلكات.
            </p>
            <div className="flex items-center gap-4 justify-start">
              <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f16c48] hover:border-[#f16c48] transition-all duration-300">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
              <a href="mailto:osamadev921@gmail.com" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f16c48] hover:border-[#f16c48] transition-all duration-300">
                <span className="material-symbols-outlined text-lg">mail</span>
              </a>
              <a href="https://maps.app.goo.gl/VS8hztGGCPpbDrBz8" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f16c48] hover:border-[#f16c48] transition-all duration-300">
                <span className="material-symbols-outlined text-lg">location_on</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-start">
            <h4 className="text-lg font-black mb-8 text-white">روابط سريعة</h4>
            <ul className="space-y-4 text-stone-400 font-body text-base">
              <li><Link href="/" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> الرئيسية</Link></li>
              <li><a href="#about" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> عن الشركة</a></li>
              <li><a href="#services" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> خدماتنا</a></li>
              <li><Link href="/projects" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> مشاريعنا</Link></li>
              <li><Link href="/policies" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> الشروط والأحكام</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="text-start">
            <h4 className="text-lg font-black mb-8 text-white">خدماتنا</h4>
            <ul className="space-y-4 text-stone-400 font-body text-base">
              <li><a href="#services" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> إنذار الحريق الذكي</a></li>
              <li><a href="#services" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> أنظمة الإطفاء المتطورة</a></li>
              <li><a href="#services" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> كاميرات المراقبة الأمنية</a></li>
              <li><a href="#services" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> عقود الصيانة الوقائية</a></li>
              <li><a href="#services" className="hover:text-[#f16c48] transition-colors flex items-center gap-2"><span className="material-symbols-outlined text-sm rtl:rotate-180">chevron_right</span> المخططات الهندسية</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-start">
            <h4 className="text-lg font-black mb-8 text-white">معلومات التواصل</h4>
            <ul className="space-y-6 text-stone-400 font-body text-base">
              <li className="flex items-start justify-start gap-4 group">
                <div className="bg-[#f16c48]/10 p-2.5 rounded-lg text-[#f16c48] shrink-0 group-hover:bg-[#f16c48] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">المقر الرئيسي</p>
                  <a href="https://maps.app.goo.gl/VS8hztGGCPpbDrBz8" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-[#f16c48] transition-colors block leading-relaxed">
                    الرياض، المملكة العربية السعودية<br />
                    <span className="text-[#f16c48] text-xs mt-1 inline-flex items-center gap-1 font-bold">
                      عرض على الخريطة
                      <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                    </span>
                  </a>
                </div>
              </li>
              <li className="flex items-start justify-start gap-4 group">
                <div className="bg-[#f16c48]/10 p-2.5 rounded-lg text-[#f16c48] shrink-0 group-hover:bg-[#f16c48] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">البريد الإلكتروني</p>
                  <a href="mailto:osamadev921@gmail.com" className="text-sm hover:text-[#f16c48] transition-colors">info@barqalmasia.net</a>
                </div>
              </li>
              <li className="flex items-start justify-start gap-4 group">
                <div className="bg-[#f16c48]/10 p-2.5 rounded-lg text-[#f16c48] shrink-0 group-hover:bg-[#f16c48] group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div>
                  <p className="text-white font-bold mb-1">الهاتف الموحد</p>
                  <a href="tel:+966540029592" className="text-sm hover:text-[#f16c48] transition-colors block" dir="ltr">+966 54 002 9592</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm font-medium">
            © {new Date().getFullYear()} شركة برق الماسية. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 text-stone-500 text-sm font-bold">
            <Link href="/policies" className="hover:text-white transition-colors">الشروط والأحكام</Link>
            <Link href="/policies" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
