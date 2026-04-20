"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../assets/logo.webp";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "#about", isAnchor: true },
    { name: "خدماتنا", href: "#services", isAnchor: true },
    { name: "مشاريعنا", href: "#projects", isAnchor: true },
    { name: "تواصل معنا", href: "#contact", isAnchor: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-white/90 dark:bg-stone-950/90 backdrop-blur-xl py-3 shadow-lg border-b border-stone-200 dark:border-stone-800"
          : "bg-transparent py-5"
          }`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          <Link href="/" className="flex items-center gap-3 z-50 group">
            {/* Logo Container */}
            <div className="relative h-12 md:h-16 w-auto flex shrink-0 items-center justify-center transition-all duration-300 group-hover:scale-105">
              <Image
                src={logo}
                alt="شركة برق الماسية"
                className="h-full w-auto object-contain transition-all duration-500"
                priority
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 font-headline text-[15px] font-bold tracking-wide">
            {navLinks.map((link) => {
              const href = link.isAnchor && pathname !== "/" ? `/${link.href}` : link.href;
              const Tag = link.isAnchor && pathname === "/" ? "a" : Link;
              return (
                <Tag
                  key={link.name}
                  href={href as any}
                  className={`relative group transition-colors duration-300 ${isScrolled || pathname !== "/"
                    ? "text-stone-700 dark:text-stone-300 hover:text-[#a93818] dark:hover:text-[#f16c48]"
                    : "text-white/90 hover:text-white"
                    }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-2 inset-x-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full ${isScrolled || pathname !== "/" ? "bg-[#a93818]" : "bg-white"
                    }`}></span>
                </Tag>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={pathname === "/" ? "#contact" : "/#contact"}
              className={`font-body text-sm font-bold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-xl flex items-center gap-2 ${isScrolled || pathname !== "/"
                ? "bg-stone-900 dark:bg-white text-white dark:text-stone-900 shadow-stone-900/10 hover:bg-[#a93818] dark:hover:bg-[#f16c48] hover:text-white dark:hover:text-white"
                : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-stone-900 shadow-none"
                }`}>
              اطلب عرض سعر
              <span className="material-symbols-outlined text-lg rtl:-scale-x-100">arrow_forward</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden z-50 flex items-center justify-center p-2 rounded-xl transition-colors duration-300 ${isScrolled || pathname !== "/" || isMobileMenuOpen ? "text-stone-900 dark:text-white" : "text-white"
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-stone-950 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Background Decor */}
        <div className="absolute top-0 end-0 w-64 h-64 bg-[#f16c48]/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 start-0 w-64 h-64 bg-[#a93818]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <nav className="flex flex-col items-center gap-8 text-2xl font-black font-headline z-10 w-full px-6">
          {navLinks.map((link) => {
            const href = link.isAnchor && pathname !== "/" ? `/${link.href}` : link.href;
            const Tag = link.isAnchor && pathname === "/" ? "a" : Link;
            return (
              <Tag
                key={link.name}
                href={href as any}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-stone-900 dark:text-white hover:text-[#f16c48] dark:hover:text-[#f16c48] transition-colors w-full text-center border-b border-stone-100 dark:border-stone-800 pb-4"
              >
                {link.name}
              </Tag>
            );
          })}
          <Link
            href={pathname === "/" ? "#contact" : "/#contact"}
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center font-body text-lg font-bold px-8 py-4 rounded-2xl bg-gradient-to-r from-[#a93818] to-[#f16c48] text-white shadow-xl shadow-[#f16c48]/20 mt-4"
          >
            اطلب عرض سعر
          </Link>
        </nav>
      </div>
    </>
  );
}
