"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const services = [
  // { id: 1, title: 'عمل التصميمات والرسومات الهندسية', image: 'https://barqalmasia.com/uploads/services/making-engineering-designs-and-drawings-2024-11-24-10-32-27-5616.jpg' },
  { id: 2, title: 'الـــصيانة الــدورية', image: 'https://barqalmasia.com/uploads/services/periodic-maintenance-2024-11-24-11-00-27-8912.jpg' },
  { id: 3, title: 'تعبئة طفايات الحريق', image: 'https://barqalmasia.com/uploads/services/fire-extinguisher-filling-2024-11-24-02-22-25-9477.jpg' },
  { id: 4, title: 'تجديد تصاريح الدفاع المدني', image: 'https://barqalmasia.com/uploads/services/renewal-of-defense-permits-2024-11-24-12-34-22-5787.jpg' },
  { id: 5, title: 'تركيب نظام الإنذار للحريق', image: 'https://barqalmasia.com/uploads/services/installing-a-fire-alarm-system-2024-11-24-01-15-59-4227.jpg' },
  { id: 6, title: 'تنفيذ الأعمال الخاصة بالأمن والسلامة', image: 'https://barqalmasia.com/uploads/services/implementation-of-security-and-safety-works-2024-11-24-01-50-50-6388.jpg' },
  { id: 7, title: 'توريد وتركيب مضخات الحريق', image: 'https://barqalmasia.com/uploads/services/supply-and-installation-of-fire-pumps-2024-11-24-02-13-06-7950.jpg' },
  { id: 8, title: 'صيانة مضخات الحريق', image: 'https://barqalmasia.com/uploads/services/fire-pump-maintenance-2024-11-24-02-31-08-1557.jpg' },
  { id: 9, title: 'تركيب أنظمة الرش الآلي والإطفاء', image: 'https://barqalmasia.com/uploads/services/installation-of-automatic-sprinkler-and-fire-extinguishing-systems-2024-12-22-08-24-35-6516.jpg' },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [selectedService]);

  return (
    <section className="py-32 bg-stone-100 dark:bg-stone-950 relative overflow-hidden" id="services">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Soft glowing orbs */}
        <div className="absolute top-0 start-0 w-[800px] h-[800px] bg-gradient-to-br from-[#a93818]/10 to-transparent rounded-full blur-[120px] -translate-y-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2"></div>
        <div className="absolute bottom-0 end-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#f16c48]/10 to-transparent rounded-full blur-[120px] translate-y-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[#a93818] dark:text-[#f16c48] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            ما نقدمه
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-black text-stone-950 dark:text-white mb-6">
            خدمات وحلول <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a93818] to-[#f16c48]">متكاملة</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#a93818] to-[#f16c48] rounded-full"></div>
          <p className="font-body text-stone-600 dark:text-stone-400 mt-8 max-w-2xl text-lg leading-relaxed">
            نقدم مجموعة واسعة من الخدمات المتقدمة في مجال الأمن والسلامة لتلبية جميع احتياجاتك بأعلى المعايير.
          </p>
        </div>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative h-[310px] rounded-[1rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#f16c48]/20 cursor-pointer border border-stone-200 dark:border-white/5 transition-all duration-500"
            >
              {/* Image with zoom effect */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

              {/* Card Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                {/* Title moves up slightly on hover */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-8">
                  <h3 className="text-2xl font-black text-white leading-snug drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>

                {/* Link fades in and slides up */}
                <div className="absolute bottom-8 start-8 flex items-center gap-2 text-[#f16c48] font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <span>عرض التفاصيل</span>
                  <span className="material-symbols-outlined rtl:-scale-x-100">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Popup */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          <div
            className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative w-full max-w-2xl bg-white dark:bg-stone-900 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 scale-100 transition-transform duration-300">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 end-4 w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-colors z-20 cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Modal Image */}
            <div className="h-[300px] w-full relative">
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent z-10"></div>
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-6 start-6 end-6 z-20 text-start">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#f16c48] text-white text-xs font-bold mb-4">
                  تفاصيل الخدمة
                </span>
                <h3 className="text-3xl font-black text-white leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 text-start">
              <p className="text-stone-600 dark:text-stone-400 text-lg mb-8 leading-relaxed">
                نقدم خدمة <span className="font-bold text-stone-950 dark:text-white">{selectedService.title}</span> بأعلى معايير الجودة والموثوقية. يعمل فريقنا من المهندسين والفنيين المتخصصين على ضمان تنفيذ الأعمال بدقة عالية لتلبية كافة متطلبات السلامة المعتمدة.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact" onClick={() => setSelectedService(null)} className="flex-1 bg-gradient-to-r from-[#a93818] to-[#f16c48] text-white font-bold py-4 rounded-2xl shadow-xl shadow-[#f16c48]/20 hover:shadow-[#f16c48]/40 hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2 group cursor-pointer">
                  احجز الخدمة الآن
                  <span className="material-symbols-outlined rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">arrow_forward</span>
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="sm:px-10 py-4 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold rounded-2xl hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
