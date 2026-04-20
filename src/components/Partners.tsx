"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const partners = [
  "https://barqalmasia.com/uploads/partener/1-2024-11-24-10-24-47-5525.webp",
  "https://barqalmasia.com/uploads/partener/12-2024-11-24-10-30-27-9722.webp",
  "https://barqalmasia.com/uploads/partener/11-2024-11-24-10-24-01-7252.webp",
  "https://barqalmasia.com/uploads/partener/10-2024-11-24-10-16-08-3696.webp",
  "https://barqalmasia.com/uploads/partener/6-2024-11-24-09-41-50-5534.webp",
  "https://barqalmasia.com/uploads/partener/4-2024-11-24-10-16-05-5833.webp",
  "https://barqalmasia.com/uploads/partener/3-2024-11-24-10-15-35-7555.webp",
];

export default function Partners() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, direction: "rtl", dragFree: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800 relative overflow-hidden" id="partners">
      {/* Background Decor */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute bottom-0 start-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#a93818]/10 to-transparent rounded-full blur-[80px] translate-y-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2"></div>
      </div>

      {/* Note: lg:flex-row-reverse to alternate layout from Clients */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row-reverse items-center gap-16">

        {/* Title Area */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-start">
          <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
            <svg width="9" height="40" viewBox="0 0 9 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.526367 0H4.52637C6.73551 0 8.52637 1.79086 8.52637 4V36C8.52637 38.2091 6.73551 40 4.52637 40H0.526367V0Z" fill="url(#paint0_linear_10_337_p)"></path>
              <defs>
                <linearGradient id="paint0_linear_10_337_p" x1="0.526367" y1="18.3055" x2="8.52637" y2="18.3055" gradientUnits="userSpaceOnUse">
                  <stop offset="0.015625" stopColor="#F58B52"></stop>
                  <stop offset="0.505208" stopColor="#ED2436"></stop>
                  <stop offset="1" stopColor="#F8B661"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span className="font-bold tracking-[0.2em] text-[#a93818] dark:text-[#f16c48] uppercase text-sm border border-[#f16c48]/30 px-4 py-1.5 rounded-full bg-[#f16c48]/5">
              شركاؤنا
            </span>
          </div>
          <h2 className="font-headline text-4xl font-black text-stone-950 dark:text-white">
            شركاء النجاح
          </h2>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
            نتعاون مع أفضل العلامات التجارية والشركات العالمية لضمان جودة استثنائية.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="w-full lg:w-3/4">
          <div className="overflow-hidden" ref={emblaRef} dir="rtl">
            <div className="flex touch-pan-y items-center">
              {partners.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_25%] min-w-0 px-3"
                >
                  <div className="bg-white border border-stone-100 dark:border-stone-800 rounded-2xl p-6 h-[140px] flex items-center justify-center hover:shadow-xl hover:border-[#a93818]/30 transition-all duration-300 group">
                    <img
                      src={image}
                      alt={`Partner ${index + 1}`}
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
