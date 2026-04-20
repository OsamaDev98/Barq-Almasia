"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const clients = [
  "https://barqalmasia.com/uploads/partener/17-2024-11-24-11-26-46-7683.webp",
  "https://barqalmasia.com/uploads/partener/18-2024-11-24-10-42-26-9356.webp",
  "https://barqalmasia.com/uploads/partener/19-2024-11-24-10-37-50-8213.webp",
  "https://barqalmasia.com/uploads/partener/20-2024-11-24-10-37-38-5404.webp",
  "https://barqalmasia.com/uploads/partener/21-2024-11-24-01-27-48-4166.webp",
  "https://barqalmasia.com/uploads/partener/22-2024-11-24-01-28-11-8719.webp",
  "https://barqalmasia.com/uploads/partener/24-2024-11-24-01-28-28-7130.webp",
  "https://barqalmasia.com/uploads/partener/25-2024-11-24-01-29-24-5950.webp",
  "https://barqalmasia.com/uploads/partener/7-2024-11-24-11-06-29-6932.webp",
  "https://barqalmasia.com/uploads/partener/8-2024-11-24-11-27-20-9178.webp",
  "https://barqalmasia.com/uploads/partener/9-2024-11-24-11-27-36-4274.webp",
  "https://barqalmasia.com/uploads/partener/13-2024-11-24-11-27-05-4874.webp",
  "https://barqalmasia.com/uploads/partener/14-2024-11-24-10-59-52-5967.webp",
  "https://barqalmasia.com/uploads/partener/15-2024-11-24-11-05-54-3064.webp",
  "https://barqalmasia.com/uploads/partener/16-2024-11-24-11-09-59-8928.webp",
];

export default function Clients() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: "rtl", dragFree: true, align: "start" },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section className="py-24 bg-stone-100 dark:bg-stone-950 border-t border-stone-200 dark:border-stone-800 relative overflow-hidden" id="clients">
      {/* Background Decor */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 end-0 w-[400px] h-[400px] bg-gradient-to-br from-[#f16c48]/10 to-transparent rounded-full blur-[80px] -translate-y-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">

        {/* Title Area */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-start">
          <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
            <svg width="9" height="40" viewBox="0 0 9 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.526367 0H4.52637C6.73551 0 8.52637 1.79086 8.52637 4V36C8.52637 38.2091 6.73551 40 4.52637 40H0.526367V0Z" fill="url(#paint0_linear_10_337)"></path>
              <defs>
                <linearGradient id="paint0_linear_10_337" x1="0.526367" y1="18.3055" x2="8.52637" y2="18.3055" gradientUnits="userSpaceOnUse">
                  <stop offset="0.015625" stopColor="#F58B52"></stop>
                  <stop offset="0.505208" stopColor="#ED2436"></stop>
                  <stop offset="1" stopColor="#F8B661"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span className="font-bold tracking-[0.2em] text-[#a93818] dark:text-[#f16c48] uppercase text-sm border border-[#f16c48]/30 px-4 py-1.5 rounded-full bg-[#f16c48]/5">
              شركاء النجاح
            </span>
          </div>
          <h2 className="font-headline text-4xl font-black text-stone-950 dark:text-white">
            عملاؤنا
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            نفتخر بخدمة نخبة من الشركات والجهات، ونسعى دائماً لتقديم الأفضل.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="w-full lg:w-3/4">
          <div className="overflow-hidden" ref={emblaRef} dir="rtl">
            <div className="flex touch-pan-y items-center">
              {clients.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_25%] min-w-0 px-3"
                >
                  <div className="bg-white border border-stone-100 dark:border-stone-800 rounded-2xl p-6 h-[140px] flex items-center justify-center hover:shadow-xl hover:border-[#f16c48]/30 transition-all duration-300 group">
                    <img
                      src={image}
                      alt={`Client ${index + 1}`}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
