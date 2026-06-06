"use client";

import React, { useState, useEffect, JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, socialLinks } from "./nav-config";
// REPLACED: Swapped GitHub and LinkedIn branding with Globe and Link2
import { Menu, X, ArrowUpRight, Globe, Link2 } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/40 bg-white/70 backdrop-blur-md dark:border-zinc-800/40 dark:bg-zinc-950/70 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand / Logo with Premium Infinite Loop Animations */}
        <AnimatedLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition-all duration-300 ease-in-out group ${
                  isActive 
                    ? "text-zinc-900 dark:text-zinc-50 font-semibold" 
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-in-out ${
                  isActive ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-5">
          <Link 
            href={socialLinks.github} 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transform transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 filter hover:drop-shadow-[0_0_6px_rgba(59,130,246,0.3)]"
          >
            {/* REPLACED: Globe Icon for main portfolio deployment */}
            <Globe className="h-5 w-5" />
            <span className="sr-only">GitHub Portfolio</span>
          </Link>
          
          <Link 
            href={socialLinks.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transform transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 filter hover:drop-shadow-[0_0_6px_rgba(99,102,241,0.3)]"
          >
            {/* REPLACED: Link2 Icon for secondary professional anchor */}
            <Link2 className="h-5 w-5" />
            <span className="sr-only">LinkedIn Profile</span>
          </Link>
          
          {/* Hire Me Button */}
          <Link
            href="#contact"
            className="relative inline-flex h-9 items-center justify-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-zinc-50 shadow transition-all duration-300 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-blue-500 dark:hover:text-white dark:hover:shadow-blue-400/10 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Hire Me
              <ArrowUpRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center rounded-md p-2 text-zinc-600 hover:text-zinc-900 focus:outline-none dark:text-zinc-400 dark:hover:text-zinc-50 md:hidden transition-transform active:scale-95"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 h-[calc(100vh-4rem)] w-full bg-white px-6 py-8 dark:bg-zinc-950 md:hidden animate-in fade-in slide-in-from-top-5 duration-300 ease-out">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-semibold tracking-tight text-zinc-900 hover:text-blue-600 dark:text-zinc-50 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            
            <hr className="border-zinc-200 dark:border-zinc-800" />
            
            <div className="flex flex-col space-y-5">
              <div className="flex space-x-6">
                <Link 
                  href={socialLinks.github} 
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  {/* REPLACED: Mobile View Icons */}
                  <Globe className="h-6 w-6" />
                  <span className="sr-only">GitHub Portfolio</span>
                </Link>
                <Link 
                  href={socialLinks.linkedin} 
                  className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
                >
                  {/* REPLACED: Mobile View Icons */}
                  <Link2 className="h-6 w-6" />
                  <span className="sr-only">LinkedIn Profile</span>
                </Link>
              </div>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-zinc-900 font-medium text-zinc-50 transition-colors hover:bg-blue-600 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-blue-500 dark:hover:text-white"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
