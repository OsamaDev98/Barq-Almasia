import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../assets/hero.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50 dark:bg-stone-950 pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 end-0 w-[1000px] h-[1000px] bg-gradient-to-b from-[#f16c48]/10 to-transparent rounded-full blur-[120px] -translate-y-1/2 rtl:-translate-x-1/3 ltr:translate-x-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 start-0 w-[800px] h-[800px] bg-gradient-to-t from-stone-400/10 dark:from-stone-600/10 to-transparent rounded-full blur-[120px] translate-y-1/3 rtl:translate-x-1/3 ltr:-translate-x-1/3 animate-pulse [animation-delay:1s]"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Animated Orbs */}
        <div className="absolute top-1/4 start-1/4 w-96 h-96 bg-[#f16c48]/5 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-1/4 end-1/4 w-96 h-96 bg-[#a93818]/5 rounded-full blur-[100px] animate-blob [animation-delay:2s]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Content Side */}
        <div className="flex flex-col space-y-10 z-10">
          <div className="inline-flex items-center gap-3 self-start bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-stone-200 dark:border-stone-800 px-5 py-2.5 rounded-full shadow-sm">
            <div className="flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#f16c48] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#a93818]"></span>
            </div>
            <span className="text-stone-800 dark:text-stone-200 font-body text-sm font-bold tracking-wide">
              نظام أمني متكامل ومعتمد
            </span>
          </div>

          <div className="space-y-8">
            <h1 className="font-headline text-5xl md:text-7xl font-black leading-[1.15] tracking-tight text-stone-950 dark:text-white">
              أمان <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a93818] to-[#f16c48]">احترافي</span><br />
              بمعايير عالمية
            </h1>
            <p className="font-body text-xl text-stone-600 dark:text-stone-400 max-w-xl leading-relaxed">
              نقدم في <span className="font-bold text-[#a93818] dark:text-[#f16c48]">شركة برق الماسية</span> أحدث حلول وأنظمة السلامة المتكاملة، لحماية منشأتك وفق أعلى المعايير والمواصفات المعتمدة في المملكة.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="group relative bg-[#a93818] text-white font-body text-lg font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-2xl shadow-[#a93818]/30 hover:shadow-[#a93818]/50 hover:-translate-y-1 transition-all duration-300 text-center cursor-pointer">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
              <span className="relative flex items-center justify-center gap-3">
                طلب عرض سعر
                <span className="material-symbols-outlined rtl:-scale-x-100 text-2xl transition-transform group-hover:-translate-x-1">arrow_forward</span>
              </span>
            </a>
            <Link href="/projects" className="group bg-white dark:bg-stone-900 border-2 border-stone-200 dark:border-stone-800 text-stone-900 dark:text-white font-body text-lg font-bold px-10 py-5 rounded-2xl hover:border-[#a93818] hover:text-[#a93818] dark:hover:border-[#f16c48] dark:hover:text-[#f16c48] transition-all duration-300 text-center cursor-pointer">
              <span className="flex items-center justify-center gap-2">
                تصفح مشاريعنا
              </span>
            </Link>
          </div>

          {/* Stats/Trust Indicators */}
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-stone-200 dark:border-stone-800">
            <div>
              <p className="text-4xl font-black text-stone-950 dark:text-white mb-1">+100</p>
              <p className="text-sm font-bold text-stone-500 uppercase tracking-widest">مشروع منجز</p>
            </div>
            <div>
              <p className="text-4xl font-black text-stone-950 dark:text-white mb-1">15</p>
              <p className="text-sm font-bold text-stone-500 uppercase tracking-widest">سنة خبرة</p>
            </div>
            <div>
              <p className="text-4xl font-black text-stone-950 dark:text-white mb-1">100%</p>
              <p className="text-sm font-bold text-stone-500 uppercase tracking-widest">مطابقة للمعايير</p>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="relative w-full h-[650px] hidden lg:block z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#a93818] to-[#f16c48] rounded-[3rem] transform rotate-3 scale-105 opacity-20 blur-3xl animate-pulse"></div>
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden border border-white/20 shadow-3xl bg-stone-900 group">
            <Image
              src={heroImg}
              loading="eager"
              priority={true}
              alt="Barq Almasia Safety Systems"
              className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>

            {/* Floating Elements on Image */}
            <div className="absolute top-12 start-12 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[2rem] flex items-center gap-4 animate-[bounce_6s_infinite]">
              <div className="bg-[#f16c48] p-4 rounded-2xl text-white shadow-lg shadow-[#f16c48]/40">
                <span className="material-symbols-outlined text-3xl">fire_extinguisher</span>
              </div>
              <div className="text-white text-start">
                <p className="font-bold text-lg">أنظمة إطفاء</p>
                <p className="text-sm text-stone-300">أحدث التقنيات</p>
              </div>
            </div>

            <div className="absolute bottom-12 end-12 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-[2rem] flex items-center gap-4 animate-[bounce_7s_infinite_0.5s]">
              <div className="text-white text-end">
                <p className="font-bold text-lg">مراقبة وحماية</p>
                <p className="text-sm text-stone-300">على مدار الساعة</p>
              </div>
              <div className="bg-stone-800 p-4 rounded-2xl text-white shadow-lg shadow-black/40">
                <span className="material-symbols-outlined text-3xl">videocam</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-[#f16c48] transition-colors cursor-pointer z-20">
        <span className="text-xs font-bold uppercase tracking-widest mb-1">اسحب لأسفل</span>
        <div className="w-8 h-12 border-2 border-stone-400 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-[#f16c48] rounded-full animate-bounce"></div>
        </div>
      </a>
    </section>
  );
}
