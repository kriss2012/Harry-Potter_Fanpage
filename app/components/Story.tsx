"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface StoryArc {
    id: string;
    title: string;
    subtitle: string;
    episodes: string;
    image: string;
    description: string;
    color: string;
    highlights: string[];
}

const Story = () => {
    const [activeArc, setActiveArc] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const storyArcs: StoryArc[] = [
        {
            id: "philosophers-stone",
            title: "The Boy Who Lived",
            subtitle: "The Philosopher's Stone",
            episodes: "Book 1 / Film 1",
            image: "/philosophers_stone.jpg",
            description: "Eleven-year-old Harry Potter discovers he is a wizard and begins his studies at Hogwarts School of Witchcraft and Wizardry. He makes lifelong friends and discovers the mystery of the Philosopher's Stone, coming face to face with Voldemort for the first time.",
            color: "from-amber-400 to-red-500",
            highlights: ["Diagon Alley", "The Sorting Hat", "Quidditch Debut", "The Mirror of Erised", "The Forbidden Forest"],
        },
        {
            id: "chamber-of-secrets",
            title: "Secrets of the Chamber",
            subtitle: "The Chamber of Secrets",
            episodes: "Book 2 / Film 2",
            image: "/chamber_secrets.jpg",
            description: "Strange events begin at Hogwarts as students and the school's cat are found petrified. Harry hears an ominous voice in the walls and must uncover the mystery of the Chamber of Secrets before it claims another victim, ultimately facing the memory of Tom Riddle.",
            color: "from-green-600 to-emerald-900",
            highlights: ["Flying Ford Anglia", "Gilderoy Lockhart", "Dobby's Warning", "Tom Riddle's Diary", "Basilisk in the Chamber"],
        },
        {
            id: "order-of-phoenix",
            title: "The Dark Mark Returns",
            subtitle: "Goblet of Fire & Order of the Phoenix",
            episodes: "Books 4–5 / Films 4–5",
            image: "/goblet_fire.jpg",
            description: "Voldemort rises to full power after using Harry's blood in a dark ritual. The Ministry of Magic refuses to acknowledge the threat. Harry forms Dumbledore's Army to train his fellow students while navigating a wizarding government in dangerous denial.",
            color: "from-purple-600 to-indigo-900",
            highlights: ["Triwizard Tournament", "Cedric Diggory's Death", "Voldemort's Return", "Dumbledore's Army", "Battle of the Department of Mysteries"],
        },
        {
            id: "horcrux-hunt",
            title: "The Horcrux Hunt",
            subtitle: "Half-Blood Prince & Deathly Hallows Pt. 1",
            episodes: "Books 6–7a / Films 6–7a",
            image: "/halfblood_prince.jpg",
            description: "Harry learns of Voldemort's Horcruxes — fragments of his soul hidden in objects. After Dumbledore's death, Harry, Hermione and Ron go on the run, hunted by Death Eaters while searching for the Horcruxes needed to make Voldemort mortal again.",
            color: "from-slate-600 to-gray-900",
            highlights: ["Dumbledore's Death", "Horcrux Revelations", "Tent Life on the Run", "Malfoy Manor", "Dobby's Sacrifice"],
        },
        {
            id: "battle-of-hogwarts",
            title: "The Battle of Hogwarts",
            subtitle: "Deathly Hallows Pt. 2",
            episodes: "Book 7b / Film 8",
            image: "/deathly_hallows.jpg",
            description: "The final confrontation arrives as Voldemort's army besieges Hogwarts. Harry learns the ultimate truth about himself and walks willingly to his death, only to return and face Voldemort in the Great Hall. The power of love triumphs over the darkest magic.",
            color: "from-amber-500 to-yellow-300",
            highlights: ["Snape's True Allegiance", "Harry's Sacrifice", "Neville Destroys Nagini", "The Resurrection Stone", "Voldemort's Defeat"],
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        if (!scrollContainerRef.current) return;

        const container = scrollContainerRef.current;
        const scrollPosition = container.scrollTop;
        const itemHeight = 300;

        const newActiveArc = Math.min(
            Math.max(Math.floor((scrollPosition + itemHeight / 2) / itemHeight), 0),
            storyArcs.length - 1
        );

        if (newActiveArc !== activeArc) {
            setActiveArc(newActiveArc);
        }
    };

    return (
        <section
            ref={sectionRef}
            id="story"
            className="relative min-h-screen w-full bg-black py-20 overflow-hidden"
        >
            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000">
                <Image
                    src={storyArcs[activeArc].image}
                    alt={storyArcs[activeArc].title}
                    fill
                    className="object-cover opacity-20 blur-md scale-105"
                    quality={60}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                        }`}
                >
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500/10 backdrop-blur-sm border border-amber-400/30 rounded-full mb-6 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-600/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                        <svg className="w-5 h-5 text-amber-400 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-amber-400 text-sm font-bold tracking-widest uppercase">
                            The Epic Saga
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase tracking-wider">
                        Chronicles of <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 animate-gradient-text">A Wizard</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Journey through the defining chapters that shaped Harry Potter&apos;s destiny from an orphan under the stairs to the saviour of the Wizarding World.
                    </p>
                </div>

                {/* Content Layout */}
                <div className="grid lg:grid-cols-12 gap-12 items-start lg:min-h-[600px]">

                    {/* Left Side - Interactive Visual Showcase */}
                    <div className={`hidden lg:block lg:col-span-7 h-full w-full transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                        <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/20 border border-white/10 group">
                            <Image
                                key={activeArc}
                                src={storyArcs[activeArc].image}
                                alt={storyArcs[activeArc].title}
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105 animate-fade-in"
                                quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                            {/* Highlight Badges */}
                            <div className="absolute top-6 left-6 flex flex-col gap-3 z-20">
                                <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${storyArcs[activeArc].color} text-white font-bold text-sm shadow-lg w-max animate-slide-in-right`}>
                                    {storyArcs[activeArc].episodes}
                                </span>
                                <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gray-300 font-semibold text-sm w-max">
                                    {storyArcs[activeArc].subtitle}
                                </span>
                            </div>

                            {/* Bottom Info */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black via-black/80 to-transparent">
                                <h3 className="text-4xl font-black text-white mb-4 drop-shadow-lg">{storyArcs[activeArc].title}</h3>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {storyArcs[activeArc].highlights.slice(0, 3).map((highlight, idx) => (
                                        <span key={idx} className="text-xs text-amber-200 border border-amber-500/30 bg-amber-500/10 px-3 py-1 rounded-full">
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Timeline Scroll */}
                    <div className={`lg:col-span-5 w-full relative transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>

                        {/* Scroll Indicator Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-800 rounded-full hidden md:block z-0">
                            <div
                                className="absolute top-0 w-full bg-gradient-to-b from-amber-400 to-purple-700 rounded-full transition-all duration-500 ease-out"
                                style={{ height: `${((activeArc + 1) / storyArcs.length) * 100}%` }}
                            ></div>
                        </div>

                        {/* Scrollable Container */}
                        <div
                            ref={scrollContainerRef}
                            onScroll={handleScroll}
                            className="max-h-[70vh] lg:max-h-none lg:h-[600px] overflow-y-auto pr-4 custom-scrollbar relative z-10 pb-16 lg:pb-32"
                        >
                            <div className="space-y-4 lg:space-y-8 pl-0 md:pl-16">
                                {storyArcs.map((arc, index) => {
                                    const isActive = index === activeArc;
                                    return (
                                        <div
                                            key={arc.id}
                                            onClick={() => setActiveArc(index)}
                                            className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${isActive
                                                ? "bg-white/10 border-white/20 shadow-xl scale-105"
                                                : "bg-transparent border-transparent hover:bg-white/5 opacity-50 hover:opacity-100"
                                                }`}
                                        >
                                            {/* Timeline Dot */}
                                            <div className={`absolute -left-10 md:left-[-3rem] top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 transition-colors duration-300 hidden md:flex items-center justify-center ${isActive ? "bg-amber-500 border-black shadow-[0_0_15px_rgba(245,158,11,0.7)]" : "bg-gray-800 border-gray-900"
                                                }`}>
                                                {isActive && <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>}
                                            </div>

                                            <h4 className={`text-2xl font-bold mb-2 ${isActive ? "text-amber-400" : "text-gray-300"}`}>
                                                {arc.subtitle}
                                            </h4>
                                            <p className={`text-md leading-relaxed ${isActive ? "text-gray-200" : "text-gray-500"}`}>
                                                {arc.description}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Scroll Hint */}
                        <div className="absolute bottom-4 right-8 bg-black/80 text-gray-400 text-sm px-4 py-2 rounded-full border border-white/10 flex items-center gap-2 animate-bounce shadow-lg pointer-events-none">
                            <span>Scroll to explore</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Story;
