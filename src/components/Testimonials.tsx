"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    id: 1,
    name: "ابو سلطان",
    rating: 5,
    text: "مو أخر تعامل معكم يعطيكم العافية",
    image: "https://barqalmasia.com/uploads/rates/-2024-11-24-08-31-15-2283.png",
  },
  {
    id: 2,
    name: "فهد",
    rating: 4,
    text: "خدمة امنة وتعامل محترم",
    image: "https://barqalmasia.com/uploads/rates/-2024-11-24-08-32-33-5804.png",
  },
  {
    id: 3,
    name: "طلال",
    rating: 5,
    text: "خدمة ممتازة ودقة بالوقت",
    image: "https://barqalmasia.com/uploads/rates/-2024-11-24-08-20-33-4731.png",
  },
  {
    id: 4,
    name: "عساف المطيري",
    rating: 4,
    text: "شكراً لكم على السرعة والدقة في التوريد والتركيب والصيانة",
    image: "https://barqalmasia.com/uploads/rates/-2024-11-24-08-29-59-1782.png",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, direction: 'rtl' }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-32 bg-stone-100 dark:bg-stone-950 relative overflow-hidden" id="testimonials">
      {/* Background Orbs & Patterns */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-1/2 start-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#f16c48]/10 to-transparent rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 end-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#a93818]/10 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#a93818] dark:text-[#f16c48] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            آراء العملاء
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-stone-950 dark:text-white">
            ماذا يقول <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a93818] to-[#f16c48]">عملاؤنا</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Embla Carousel Viewport */}
          <div className="overflow-hidden rounded-3xl" ref={emblaRef} dir="rtl">
            <div className="flex touch-pan-y">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_100%] min-w-0 px-4"
                >
                  <div className="bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-800 rounded-3xl p-8 shadow-xl shadow-stone-200/50 dark:shadow-none relative h-full flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">

                    {/* Quote Icon Top Right */}
                    <span className="absolute top-6 start-6 material-symbols-outlined text-5xl text-[#f16c48]/10 rotate-180">
                      format_quote
                    </span>
                    {/* Quote Icon Bottom Left */}
                    <span className="absolute bottom-6 end-6 material-symbols-outlined text-5xl text-[#f16c48]/10">
                      format_quote
                    </span>

                    <div className="w-24 h-24 rounded-full p-1 border-[3px] border-[#f16c48] mb-6 relative z-10 bg-white dark:bg-stone-800 shadow-md">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <h4 className="text-xl font-black text-stone-950 dark:text-white mb-2 relative z-10">
                      {item.name}
                    </h4>

                    <div className="flex gap-1 mb-6 relative z-10">
                      {[...Array(5)].map((_, index) => (
                        <span
                          key={index}
                          className={`material-symbols-outlined text-xl ${index < item.rating ? "text-amber-400" : "text-stone-300 dark:text-stone-700"
                            }`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          star
                        </span>
                      ))}
                    </div>

                    <p className="text-lg text-stone-600 dark:text-stone-300 font-semibold leading-relaxed relative z-10">
                      &quot;{item.text}&quot;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -start-4 md:-start-12 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-stone-800 shadow-lg border border-stone-100 dark:border-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-[#f16c48] dark:hover:text-[#f16c48] transition-colors z-20 cursor-pointer"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-1/2 -end-4 md:-end-12 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-stone-800 shadow-lg border border-stone-100 dark:border-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-[#f16c48] dark:hover:text-[#f16c48] transition-colors z-20 cursor-pointer"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
        </div>
      </div>
    </section>
  );
}
