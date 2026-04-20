import React from "react";
import aboutImg from "../assets/about.webp";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-32 bg-white dark:bg-stone-950 relative overflow-hidden" id="about">
      {/* Background Element */}
      <div className="absolute top-1/2 start-0 w-[500px] h-[500px] bg-[#f16c48]/5 rounded-full blur-[120px] -translate-y-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual Side */}
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-[#a93818]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <Image
              src={aboutImg}
              alt="عن شركة برق الماسية"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Year Badge */}
            <div className="absolute bottom-8 start-8 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md p-6 rounded-3xl shadow-xl z-20 border border-white/20">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-[#f16c48] to-[#a93818] w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shadow-[#f16c48]/30">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <div>
                  <p className="text-3xl font-black text-stone-950 dark:text-white">2015</p>
                  <p className="text-sm font-bold text-stone-500 uppercase tracking-widest">عام التأسيس</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex flex-col items-start text-start">
            <span className="text-[#a93818] dark:text-[#f16c48] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              من نحن
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-stone-950 dark:text-white mb-8 leading-tight">
              شركة <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a93818] to-[#f16c48]">برق الماسية</span><br />
              لأجهزة الأمن والسلامة
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#a93818] to-[#f16c48] rounded-full mb-8"></div>

            <div className="space-y-6 text-stone-600 dark:text-stone-400 text-lg leading-relaxed font-body">
              <p>
                نفهم أهمية السلامة في المنازل، الشركات، والمرافق العامة. لذلك، نلتزم بتقديم أحدث التقنيات والمنتجات ذات الجودة العالية، بالإضافة إلى خدمات التركيب والصيانة والدعم الفني.
              </p>
              <p>
                بكوادر وطنية مؤهلة لخدمتكم، تأسست برق الماسية لأجهزة الأمن والسلامة في عام 2015 كشركة متخصصة في مجال توريد وتركيب وصيانة وبيع مجموعة متنوعة من أنظمة الأمن والسلامة وأجهزة مكافحة الحريق والرش الآلي والإنذار المبكر، بالإضافة إلى جميع أنواع الكاميرات وأنظمة الحماية.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 w-full">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-[#a93818] shadow-sm">
                  <span className="material-symbols-outlined">engineering</span>
                </div>
                <span className="font-bold text-stone-950 dark:text-white">كوادر وطنية مؤهلة</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-[#a93818] shadow-sm">
                  <span className="material-symbols-outlined">high_quality</span>
                </div>
                <span className="font-bold text-stone-950 dark:text-white">جودة عالية</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-[#a93818] shadow-sm">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <span className="font-bold text-stone-950 dark:text-white">دعم فني مستمر</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-stone-50 dark:bg-stone-900 flex items-center justify-center text-[#a93818] shadow-sm">
                  <span className="material-symbols-outlined">verified_user</span>
                </div>
                <span className="font-bold text-stone-950 dark:text-white">أنظمة معتمدة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
