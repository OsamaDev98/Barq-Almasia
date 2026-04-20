"use client";

import React, { useState } from "react";
import Link from "next/link";
import { allProjects } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof allProjects[0] | null>(null);

  // Take the first 6 projects for the homepage
  const homepageProjects = allProjects.slice(0, 6);

  return (
    <section className="py-32 bg-stone-900 text-white relative overflow-hidden" id="projects">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        {/* Glowing Orbs */}
        <div className="absolute top-0 end-0 w-[800px] h-[800px] bg-gradient-to-br from-[#a93818]/20 to-transparent rounded-full blur-[120px] -translate-y-1/2 rtl:translate-x-1/2 ltr:-translate-x-1/2"></div>
        <div className="absolute bottom-0 start-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#f16c48]/20 to-transparent rounded-full blur-[120px] translate-y-1/2 rtl:-translate-x-1/2 ltr:translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="text-start">
            <span className="text-[#f16c48] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              إنجازاتنا
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-white">
              مشاريع نفخر <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f16c48] to-[#a93818]">بتأمينها</span>
            </h2>
          </div>
          <Link href="/projects" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#f16c48] hover:border-[#f16c48] transition-all duration-300 shadow-sm flex items-center gap-2 group">
            <span>عرض كافة المشاريع</span>
            <span className="material-symbols-outlined rtl:-scale-x-100 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homepageProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative h-[350px] rounded-[2.5rem] overflow-hidden shadow-xl cursor-pointer border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-[#f16c48]/20"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100"></div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-start z-20">
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-xl md:text-2xl font-black text-white leading-snug drop-shadow-md">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="absolute top-6 end-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30">
                <span className="material-symbols-outlined rtl:-scale-x-100">arrow_outward</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 opacity-100 transition-opacity duration-300">
          <div
            className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProject(null)}
          ></div>
          <div className="relative w-full max-w-4xl bg-white dark:bg-stone-900 rounded-[2.5rem] overflow-hidden shadow-2xl z-10 scale-100 transition-transform duration-300 text-start">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 end-4 w-12 h-12 cursor-pointer bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-colors z-20"
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
                    className="px-8 py-4 cursor-pointer bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-bold rounded-2xl hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors flex-1 text-center"
                  >
                    إغلاق
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
