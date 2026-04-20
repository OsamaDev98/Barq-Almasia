"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-950">
      <Header />

      <main className="flex-grow pt-24 pb-32">
        {/* Page Hero */}
        <div className="relative py-24 mb-16 overflow-hidden">
          <div className="absolute inset-0 bg-stone-900 z-0">
            {/* Dark background with glowing effects */}
            <div className="absolute top-0 end-0 w-[600px] h-[600px] bg-[#a93818]/20 rounded-full blur-[100px] -translate-y-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2"></div>
            <div className="absolute bottom-0 start-0 w-[600px] h-[600px] bg-[#f16c48]/20 rounded-full blur-[100px] translate-y-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              مشاريعنا <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a93818] to-[#f16c48]">المتميزة</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-stone-300 font-bold">
              <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <span className="material-symbols-outlined text-sm rtl:-scale-x-100">chevron_right</span>
              <span className="text-[#f16c48]">مشاريعنا</span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                onClick={() => setSelectedProject(project)}
                className="group relative h-[320px] rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#f16c48]/20 cursor-pointer border border-stone-200 dark:border-white/5 transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-start z-20">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-xl font-black text-white leading-snug drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute top-4 end-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                  <span className="material-symbols-outlined text-sm rtl:-scale-x-100">arrow_outward</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          <div
            className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative w-full max-w-4xl bg-white dark:bg-stone-900 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 scale-100 transition-transform duration-300">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 end-4 cursor-pointer w-12 h-12 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-colors z-20"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-[300px] md:h-[500px] relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#f16c48]/10 text-[#f16c48] w-max font-bold mb-4">
                  تفاصيل المشروع
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-stone-950 dark:text-white leading-tight mb-6">
                  {selectedProject.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-8">
                  {selectedProject.description}
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-4 cursor-pointer bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold rounded-2xl hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors flex-1"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
