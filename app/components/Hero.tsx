"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!revealRef.current) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Store last position
    lastPositionRef.current = { x, y };

    // Direct DOM manipulation for smoother performance
    revealRef.current.style.clipPath = isHovering
      ? `circle(150px at ${x}px ${y}px)`
      : `circle(0px at ${x}px ${y}px)`;
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/hogwarts_castle.jpg"
          alt="Hogwarts Castle"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
        {/* Gold/Purple Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-purple-700/10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              {/* Animated Badge */}
              <div
                className={`inline-flex items-center space-x-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/50 rounded-full transform transition-all duration-1000 ${isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
                  }`}
              >
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-amber-400 text-sm font-medium">
                  developed by krishna
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1
                  className={`text-6xl md:text-8xl font-bold transform transition-all duration-1000 delay-200 ${isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                    }`}
                >
                  <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-gradient">
                    HARRY
                  </span>
                  <span className="block text-white text-4xl md:text-5xl mt-2">
                    POTTER
                  </span>
                </h1>

                <p
                  className={`text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed transform transition-all duration-1000 delay-400 ${isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                    }`}
                >
                  Follow the journey of the Boy Who Lived as he discovers a
                  magical world and battles the Dark Lord Voldemort.
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-600 ${isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
                  }`}
              >
                <a href="https://t.me/narutoepisodes120" target="_blank" rel="noopener noreferrer" className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-purple-700 text-white rounded-full font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/50">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Watch Now</span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>

                <a
                  href="https://narutokr.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-semibold border-2 border-white/20 hover:bg-white/20 hover:border-amber-500/50 transition-all duration-300 transform hover:scale-105"
                >
                  Explore More
                </a>
              </div>

              {/* Stats */}
              <div
                className={`flex gap-8 pt-8 transform transition-all duration-1000 delay-800 ${isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
                  }`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">8</div>
                  <div className="text-gray-400 text-sm">Films</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">200+</div>
                  <div className="text-gray-400 text-sm">Spells</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">7</div>
                  <div className="text-gray-400 text-sm">Books</div>
                </div>
              </div>
            </div>

            {/* Right Side - Character Images */}
            <div className="relative hidden md:block">
              {/* Main Character Image with Hover Effect */}
              <div
                className={`relative transform transition-all duration-1000 delay-300 ${isLoaded
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
                  }`}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                  setIsHovering(false);
                  if (revealRef.current) {
                    revealRef.current.style.clipPath = `circle(0px at ${lastPositionRef.current.x}px ${lastPositionRef.current.y}px)`;
                  }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-purple-700 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
                <div className="relative w-full h-[600px] rounded-3xl overflow-hidden border-4 border-amber-400/30 shadow-2xl group">
                  {/* Background Image - Always Visible */}
                  <Image
                    src="/harry.jpg"
                    alt="Harry Potter Hogwarts"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                  />

                  {/* Foreground Image - Reveals on Hover */}
                  <div
                    ref={revealRef}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      clipPath: "circle(0px at 50% 50%)",
                      transition: "clip-path 0.1s ease-out",
                    }}
                  >
                    <Image
                      src="/trio.jpg"
                      alt="Harry Potter"
                      fill
                      className="object-cover"
                      priority
                      quality={90}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className={`absolute -top-10 -left-10 w-32 h-32 transform transition-all duration-1000 delay-500 ${isLoaded
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-20 opacity-0"
                  }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-xl animate-float">
                  <Image
                    src="/philosophers_stone.jpg"
                    alt="Hogwarts Express"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>

              <div
                className={`absolute -bottom-10 -right-10 w-40 h-40 transform transition-all duration-1000 delay-700 ${isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
                  }`}
              >
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-xl animate-float-delayed">
                  <Image
                    src="/houses_poster.jpg"
                    alt="Golden Snitch"
                    fill
                    className="object-cover"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-amber-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
