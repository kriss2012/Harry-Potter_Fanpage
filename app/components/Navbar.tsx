"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll
      const sections = ["home", "characters", "story", "houses"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Characters", href: "#characters" },
    { name: "Story", href: "#story" },
    { name: "Houses", href: "#houses" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-amber-500/20 py-0"
          : "bg-transparent py-2"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-purple-500 to-amber-400 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

              {/* Main logo text with gradient animation */}
              <span className="relative text-2xl md:text-3xl font-black tracking-wider bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-gradient-text">
                HARRY POTTER
              </span>

              {/* Underline effect */}
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            {/* Lightning bolt icon */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-purple-700 animate-spin-slow opacity-75 blur-sm"></div>
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-amber-400 to-purple-700 flex items-center justify-center transform group-hover:rotate-180 transition-transform duration-700 shadow-lg shadow-amber-500/50">
                <span className="text-white font-black text-lg leading-none">⚡</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-0">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm lg:text-base font-semibold transition-all duration-300 group overflow-hidden ${isActive ? "text-amber-400" : "text-gray-300"
                    }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Background hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>

                  {/* Text with stagger animation */}
                  <span className="relative inline-flex">
                    {item.name.split("").map((char, i) => (
                      <span
                        key={i}
                        className="inline-block group-hover:text-amber-400 transition-all duration-300 group-hover:animate-bounce-subtle"
                        style={{
                          animationDelay: `${i * 50}ms`,
                          transitionDelay: `${i * 30}ms`,
                        }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>

                  {/* Bottom gradient line */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-purple-600 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>

                  {/* Particles effect on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="absolute top-0 left-1/4 w-1 h-1 bg-amber-400 rounded-full group-hover:animate-particle-1"></span>
                    <span className="absolute top-0 right-1/4 w-1 h-1 bg-purple-500 rounded-full group-hover:animate-particle-2"></span>
                  </span>
                </Link>
              );
            })}

            {/* Read Now Button */}
            <a href="https://www.wizardingworld.com/" target="_blank" rel="noopener noreferrer" className="relative ml-4 px-6 py-2.5 bg-gradient-to-r from-amber-500 to-purple-700 text-white rounded-full overflow-hidden group font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/60 transition-shadow duration-300">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

              {/* Text */}
              <span className="relative z-10 flex items-center space-x-1">
                <span className="group-hover:tracking-wider transition-all duration-300">
                  Explore Now
                </span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>

              {/* Pulse ring effect */}
              <span className="absolute inset-0 rounded-full border-2 border-amber-400 opacity-0 group-hover:opacity-100 group-hover:animate-ping-slow"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none relative p-2 group"
          >
            <div className="absolute inset-0 bg-amber-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative space-y-2">
              <span
                className={`block w-8 h-0.5 bg-gradient-to-r from-amber-400 to-purple-500 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2.5" : ""
                  }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-gradient-to-r from-amber-400 to-purple-500 transition-all duration-300 ${mobileMenuOpen ? "opacity-0 scale-0" : ""
                  }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-gradient-to-r from-amber-400 to-purple-500 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-black/95 backdrop-blur-md border-t border-amber-500/20">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block relative text-gray-300 hover:text-amber-400 transition-all duration-300 text-lg py-3 px-4 rounded-lg overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-purple-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <span className="relative flex items-center justify-between">
                <span className="font-semibold">{item.name}</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
            </Link>
          ))}
          <a href="https://www.wizardingworld.com/" target="_blank" rel="noopener noreferrer" className="block text-center w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-purple-700 text-white rounded-full mt-4 font-semibold relative overflow-hidden group shadow-lg shadow-amber-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <span className="relative group-hover:tracking-wider transition-all duration-300">
              Explore Now
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
