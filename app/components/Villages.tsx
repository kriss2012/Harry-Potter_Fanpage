"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import VillageModal from "./VillageModal";

interface Village {
    id: string;
    name: string;
    country: string;
    kage: string;
    symbol: string;
    image: string;
    description: string;
    color: string;
    extendedDescription?: string;
    notableClans?: string[];
    landmarks?: string[];
}

const Villages = () => {
    const [activeVillage, setActiveVillage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    const villages: Village[] = [
        {
            id: "gryffindor",
            name: "Gryffindor",
            country: "Godric Gryffindor",
            kage: "Head of House",
            symbol: "Lion",
            image: "/gryffindor_banner.jpg",
            description: "Home to the brave-hearted and chivalrous. Gryffindor house values courage, nerve, and daring. It is the house of Harry Potter, Hermione Granger, and countless heroes who stood against the darkness.",
            color: "from-red-600 to-amber-500",
            extendedDescription: "Founded by Godric Gryffindor, this house prises above all else bravery, nerve, chivalry and daring. Its common room is located in a tower on the seventh floor, guarded by the Fat Lady portrait. In the darkest of times, it was Gryffindor students who led the resistance and fought at the Battle of Hogwarts.",
            notableClans: ["Potter", "Weasley", "Granger", "Black", "Longbottom"],
            landmarks: ["Gryffindor Tower", "Common Room Behind the Fat Lady", "Quidditch Pitch"],
        },
        {
            id: "slytherin",
            name: "Slytherin",
            country: "Salazar Slytherin",
            kage: "Head of House",
            symbol: "Serpent",
            image: "/slytherin_crest.jpg",
            description: "The house of ambition, cunning and resourcefulness. Slytherin has produced more Dark wizards than any other house, though it also counts many great and complex figures among its alumni — including Severus Snape.",
            color: "from-emerald-600 to-green-900",
            extendedDescription: "Founded by Salazar Slytherin, this house values ambition, cunning, leadership and resourcefulness. Located in the dungeons beneath the lake, its common room is a greenish, low-ceilinged room. Slytherins are fiercely loyal to their own, and their resourcefulness often leads to greatness — for good or ill.",
            notableClans: ["Malfoy", "Snape", "Riddle", "Black", "Slughorn"],
            landmarks: ["Slytherin Dungeons", "Common Room Under the Lake", "Chamber of Secrets Entrance"],
        },
        {
            id: "ravenclaw",
            name: "Ravenclaw",
            country: "Rowena Ravenclaw",
            kage: "Head of House",
            symbol: "Eagle",
            image: "/ravenclaw_crest.jpg",
            description: "The house of wit, wisdom and learning. Ravenclaws are known for their intelligence and love of knowledge. Luna Lovegood's dreamy wisdom and Cho Chang's loyalty exemplify the eccentricity and depth of this house.",
            color: "from-blue-600 to-indigo-800",
            extendedDescription: "Founded by Rowena Ravenclaw, the house prizes wit, wisdom, and learning above all else. Its tower is accessed by answering a riddle instead of a password. Ravenclaw students are often individualistic thinkers who use their unique perspectives to solve problems no one else can.",
            notableClans: ["Lovegood", "Chang", "Ollivander", "Quirrell"],
            landmarks: ["Ravenclaw Tower", "The Bronze Eagle Knocker", "Rowena Ravenclaw's Diadem"],
        },
        {
            id: "hufflepuff",
            name: "Hufflepuff",
            country: "Helga Hufflepuff",
            kage: "Head of House",
            symbol: "Badger",
            image: "/hufflepuff_crest.jpg",
            description: "The house of loyalty, patience, and hard work. Often underestimated, Hufflepuffs prove their worth through dedication and integrity. Nymphadora Tonks and Cedric Diggory stand as examples of Hufflepuff honour.",
            color: "from-yellow-500 to-amber-700",
            extendedDescription: "Founded by Helga Hufflepuff, this house values hard work, patience, loyalty, and fair play. Their common room is located near the kitchens, a warm and earthy space full of copper and plants. Hufflepuffs are known for their inclusivity — Helga Hufflepuff accepted all students when others were selective.",
            notableClans: ["Diggory", "Tonks", "Longbottom (allies)", "Sprout"],
            landmarks: ["Hufflepuff Basement", "Entrance Near the Kitchens", "Hufflepuff Quidditch Stands"],
        },
        {
            id: "hogwarts",
            name: "Hogwarts Castle",
            country: "Scotland",
            kage: "Headmaster",
            symbol: "H (Four Houses)",
            image: "/hogwarts_castle.jpg",
            description: "The greatest school of witchcraft and wizardry in the world, Hogwarts Castle is a place of ancient magic, secrets and wonder. Founded over a thousand years ago, it has stood as a beacon of magical education and protection.",
            color: "from-amber-500 to-purple-700",
            extendedDescription: "Hogwarts School of Witchcraft and Wizardry was founded by the four founders in the Scottish Highlands. The castle is enchanted to appear as a ruin to Muggles and contains over 142 staircases, moving portraits, and rooms that only appear when needed. It served as the final battlefield where good triumphed over Voldemort.",
            notableClans: ["Dumbledore lineage", "McGonagall", "The Founders"],
            landmarks: ["The Great Hall", "Room of Requirement", "Forbidden Forest", "Astronomy Tower"],
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

    return (
        <section
            ref={sectionRef}
            id="houses"
            className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[100px] bg-gradient-to-br ${villages[activeVillage].color} transition-colors duration-1000`}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                        }`}
                >
                    <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6">
                        <div className={`w-2 h-2 rounded-full animate-pulse bg-gradient-to-r ${villages[activeVillage].color}`}></div>
                        <span className="text-gray-300 text-sm font-medium">
                            ⚡ The Four Hogwarts Houses
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 text-white uppercase tracking-wider">
                        Hogwarts <span className={`bg-gradient-to-r ${villages[activeVillage].color} bg-clip-text text-transparent`}>Houses</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Explore the iconic houses of Hogwarts that shape the destiny and character of every witch and wizard.
                    </p>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-12 gap-8 items-center lg:min-h-[500px]">

                    {/* Left Navigation */}
                    <div className={`lg:col-span-4 space-y-4 transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
                        {villages.map((village, index) => {
                            const isActive = index === activeVillage;
                            return (
                                <button
                                    key={village.id}
                                    onClick={() => setActiveVillage(index)}
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 relative overflow-hidden group border ${isActive
                                        ? `bg-gradient-to-r ${village.color} bg-opacity-20 border-white/30 transform scale-105 shadow-2xl`
                                        : "bg-white/5 border-white/5 hover:bg-white/10"
                                        }`}
                                >
                                    <div className="relative z-10">
                                        <h3 className={`text-xl font-bold mb-1 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                                            {village.name}
                                        </h3>
                                        <p className={`text-sm ${isActive ? "text-white/80" : "text-gray-500"}`}>
                                            Founded by {village.country}
                                        </p>
                                    </div>
                                    {isActive && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-[shimmer_2s_infinite]"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Content */}
                    <div className={`lg:col-span-8 w-full mt-8 lg:mt-0 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
                        <div className="relative w-full min-h-[500px] lg:h-[500px] rounded-3xl overflow-hidden group">
                            {/* Dynamic Image */}
                            <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
                                {villages.map((village, index) => (
                                    <div
                                        key={village.id}
                                        className={`absolute inset-0 transition-opacity duration-1000 ${index === activeVillage ? "opacity-100 z-10" : "opacity-0 z-0"
                                            }`}
                                    >
                                        <Image
                                            src={village.image}
                                            alt={village.name}
                                            fill
                                            className="object-contain lg:object-cover object-top lg:object-center bg-transparent transition-transform duration-1000 lg:group-hover:scale-110"
                                            quality={90}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 lg:via-black/60 to-transparent"></div>
                                        <div className={`absolute inset-0 bg-gradient-to-r ${village.color} opacity-20 mix-blend-overlay`}></div>
                                    </div>
                                ))}
                            </div>

                            {/* House Details Overlay */}
                            <div className="relative lg:absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 pt-[250px] lg:pt-0">
                                <div className="animate-fade-in-up" key={activeVillage}>
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-sm">
                                            {villages[activeVillage].symbol}
                                        </span>
                                        <span className={`px-4 py-1.5 rounded-full bg-gradient-to-r ${villages[activeVillage].color} text-white font-bold text-sm shadow-lg`}>
                                            {villages[activeVillage].kage}: {villages[activeVillage].country}
                                        </span>
                                    </div>
                                    <p className="text-gray-200 text-base lg:text-lg leading-relaxed md:w-3/4 mb-6">
                                        {villages[activeVillage].description}
                                    </p>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className={`px-8 py-3 rounded-full font-bold text-white bg-gradient-to-r ${villages[activeVillage].color} hover:scale-105 transition-transform duration-300 shadow-xl flex items-center space-x-2`}
                                    >
                                        <span>Learn More</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <VillageModal
                village={isModalOpen ? villages[activeVillage] : null}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Villages;
