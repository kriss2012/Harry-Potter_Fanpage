"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CharacterModal from "./CharacterModal";

interface Character {
  id: number;
  name: string;
  title: string;
  image: string;
  clan: string;
  rank: string;
  abilities: string[];
  description: string;
  affiliation: string;
  stats: {
    ninjutsu: number;
    taijutsu: number;
    genjutsu: number;
    intelligence: number;
    strength: number;
    speed: number;
  };
  backstory: string;
}

const Characters = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const characters: Character[] = [
    {
      id: 1,
      name: "Harry Potter",
      title: "The Chosen One",
      image: "/harry.jpg",
      clan: "Gryffindor",
      rank: "Auror",
      abilities: ["Expelliarmus", "Patronus Charm", "Parseltongue", "Flying"],
      description:
        "The Boy Who Lived, destined to face Lord Voldemort. Harry's courage and love make him the greatest wizard of his generation.",
      affiliation: "Order of the Phoenix",
      stats: { ninjutsu: 85, taijutsu: 75, genjutsu: 70, intelligence: 78, strength: 80, speed: 85 },
      backstory: "Survivor of Voldemort's killing curse as an infant, Harry grew up unaware of his magical heritage. Upon entering Hogwarts, he discovered his true destiny and spent seven years fighting the Dark Lord, ultimately sacrificing himself and prevailing through the power of love.",
    },
    {
      id: 2,
      name: "Hermione Granger",
      title: "The Brightest Witch",
      image: "/granger.jpg",
      clan: "Gryffindor",
      rank: "Minister for Magic",
      abilities: ["Time-Turner", "Legilimency", "Ancient Runes", "Apparition"],
      description:
        "The brightest witch of her age, Hermione's encyclopaedic knowledge and quick thinking saved Harry countless times.",
      affiliation: "Order of the Phoenix",
      stats: { ninjutsu: 100, taijutsu: 60, genjutsu: 95, intelligence: 100, strength: 55, speed: 70 },
      backstory: "A Muggle-born witch of extraordinary talent, Hermione quickly became the top student at Hogwarts. Her unwavering loyalty to Harry and Ron, combined with her formidable magical prowess, proved indispensable in the hunt for Horcruxes and the defeat of Voldemort.",
    },
    {
      id: 3,
      name: "Ron Weasley",
      title: "The Loyal Friend",
      image: "/ron.jpg",
      clan: "Gryffindor",
      rank: "Auror",
      abilities: ["Chess Strategy", "Keeper", "Parseltongue (imitated)", "Horcrux Destruction"],
      description:
        "Harry's steadfast best friend whose bravery and loyalty proved essential in the darkest of times.",
      affiliation: "Order of the Phoenix",
      stats: { ninjutsu: 72, taijutsu: 70, genjutsu: 60, intelligence: 75, strength: 75, speed: 72 },
      backstory: "Born into the warm and loving Weasley family, Ron faced the challenge of living in the shadow of his many talented siblings. His unshakeable loyalty, tactical mind (honed through chess), and courage in the face of his deepest fears made him an irreplaceable member of the trio.",
    },
    {
      id: 4,
      name: "Albus Dumbledore",
      title: "The Greatest Headmaster",
      image: "/albus.jpg",
      clan: "Gryffindor",
      rank: "Headmaster",
      abilities: ["Priori Incantatem", "Fawkes the Phoenix", "Elder Wand", "Legilimency"],
      description:
        "The greatest wizard of the age, Dumbledore guided Harry with wisdom and orchestrated the defeat of Voldemort.",
      affiliation: "Order of the Phoenix",
      stats: { ninjutsu: 100, taijutsu: 85, genjutsu: 100, intelligence: 100, strength: 75, speed: 80 },
      backstory: "Considered the most powerful wizard of his era, Albus Dumbledore founded the Order of the Phoenix and served as Headmaster of Hogwarts. He orchestrated a complex decades-long plan to defeat Voldemort, sacrificing himself to ensure Harry could fulfill his destiny.",
    },
    {
      id: 5,
      name: "Severus Snape",
      title: "The Half-Blood Prince",
      image: "/snape.jpg",
      clan: "Slytherin",
      rank: "Potions Master",
      abilities: ["Occlumency", "Legilimency", "Sectumsempra", "Double Agent"],
      description:
        "A complex and misunderstood figure whose secret love and ultimate sacrifice made him one of the bravest men Harry ever knew.",
      affiliation: "Hogwarts",
      stats: { ninjutsu: 95, taijutsu: 70, genjutsu: 98, intelligence: 97, strength: 60, speed: 75 },
      backstory: "A master of Potions and the Dark Arts, Snape lived a double life as a Death Eater and Dumbledore's most trusted spy. His lifelong love for Lily Potter motivated every sacrifice he made, culminating in his death and posthumous revelation as one of the war's greatest heroes.",
    },
    {
      id: 6,
      name: "Lord Voldemort",
      title: "The Dark Lord",
      image: "/lord.jpg",
      clan: "Slytherin",
      rank: "Dark Lord",
      abilities: ["Avada Kedavra", "Horcruxes", "Parseltongue", "Legilimency"],
      description:
        "The most feared Dark wizard of all time, who sought immortality and pure-blood supremacy at all costs.",
      affiliation: "Death Eaters",
      stats: { ninjutsu: 100, taijutsu: 80, genjutsu: 100, intelligence: 95, strength: 85, speed: 90 },
      backstory: "Born Tom Marvolo Riddle, he displayed disturbing powers from childhood. Obsessed with power and the abolition of death, he created seven Horcruxes to make himself immortal. His inability to understand love — his greatest weakness — ultimately led to his final defeat.",
    },
    {
      id: 7,
      name: "Draco Malfoy",
      title: "The Slytherin Heir",
      image: "/malfoy.jpg",
      clan: "Slytherin",
      rank: "Death Eater",
      abilities: ["Occlumency", "Expelliarmus", "Vanishing Cabinet", "Unforgivable Curses"],
      description:
        "Harry's arch-rival at Hogwarts, born into privilege but ultimately unable to commit true evil.",
      affiliation: "Death Eaters",
      stats: { ninjutsu: 78, taijutsu: 65, genjutsu: 72, intelligence: 82, strength: 60, speed: 68 },
      backstory: "Born into the elite Malfoy family, Draco was raised with strong pure-blood prejudices. Despite years of antagonising Harry, when faced with true evil, he repeatedly failed to act, suggesting a conscience he rarely showed. His eventual redemption came through subtle acts of defiance.",
    },
    {
      id: 8,
      name: "Sirius Black",
      title: "The Godfather",
      image: "/sirius.jpg",
      clan: "Gryffindor",
      rank: "Animagus",
      abilities: ["Animagus (Dog)", "Dueling", "Legilimency", "Occlumency"],
      description:
        "Harry's beloved godfather, wrongly imprisoned in Azkaban for twelve years but never broken in spirit.",
      affiliation: "Order of the Phoenix",
      stats: { ninjutsu: 88, taijutsu: 82, genjutsu: 75, intelligence: 85, strength: 80, speed: 88 },
      backstory: "An Animagus and member of the Marauders, Sirius was wrongly convicted of betraying the Potters. He spent twelve years in Azkaban but escaped, becoming the only wizard ever to do so. He served as Harry's most important father figure until his tragic death in the Department of Mysteries.",
    },
    {
      id: 9,
      name: "Neville Longbottom",
      title: "The Unexpected Hero",
      image: "/neville.jpg",
      clan: "Gryffindor",
      rank: "Herbology Professor",
      abilities: ["Herbology", "Gryffindor's Sword", "Herbivicus", "Leadership"],
      description:
        "The boy who could have been the Chosen One, who grew from a timid student into one of the war's greatest heroes.",
      affiliation: "Dumbledore's Army",
      stats: { ninjutsu: 70, taijutsu: 72, genjutsu: 55, intelligence: 73, strength: 78, speed: 65 },
      backstory: "Born on the same day as Harry and nearly chosen by Voldemort, Neville grew up under the shadow of his parents' torture. Awkward and clumsy at first, he blossomed into a courageous leader who led the Hogwarts resistance in Harry's final year, ultimately destroying the last Horcrux with Gryffindor's sword.",
    },
    {
      id: 10,
      name: "Luna Lovegood",
      title: "The Dreamy Eccentric",
      image: "/luna.jpg",
      clan: "Ravenclaw",
      rank: "Magizoologist",
      abilities: ["Thestral Sight", "Spectrespecs", "Wrackspurt Detection", "Stupefy"],
      description:
        "Wonderfully odd and refreshingly honest, Luna's unique perspective and loyalty made her an invaluable friend.",
      affiliation: "Dumbledore's Army",
      stats: { ninjutsu: 75, taijutsu: 60, genjutsu: 70, intelligence: 88, strength: 50, speed: 62 },
      backstory: "Daughter of the Quibbler editor, Luna lost her mother at a young age and grew up believing in magical creatures others dismissed. Her ability to see Thestrals and her unique worldview made her an outsider, but her fierce loyalty and intuitive wisdom proved invaluable to Harry's cause.",
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

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % characters.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlay, characters.length]);

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absPosition =
      ((diff % characters.length) + characters.length) % characters.length;

    let translateX = 0;
    let translateZ = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 0;

    if (absPosition === 0) {
      translateX = 0;
      translateZ = 100;
      scale = 1.2;
      zIndex = 10;
    } else if (absPosition === 1) {
      translateX = 350;
      translateZ = -50;
      rotateY = -35;
      scale = 0.85;
      opacity = 0.7;
      zIndex = 5;
    } else if (absPosition === characters.length - 1) {
      translateX = -350;
      translateZ = -50;
      rotateY = 35;
      scale = 0.85;
      opacity = 0.7;
      zIndex = 5;
    } else if (absPosition === 2) {
      translateX = 650;
      translateZ = -150;
      rotateY = -45;
      scale = 0.6;
      opacity = 0.4;
      zIndex = 2;
    } else if (absPosition === characters.length - 2) {
      translateX = -650;
      translateZ = -150;
      rotateY = 45;
      scale = 0.6;
      opacity = 0.4;
      zIndex = 2;
    } else {
      translateX = absPosition < characters.length / 2 ? 1000 : -1000;
      translateZ = -200;
      scale = 0.4;
      opacity = 0;
      zIndex = 0;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  const handlePrev = () => {
    setIsAutoPlay(false);
    setActiveIndex(
      (prev) => (prev - 1 + characters.length) % characters.length,
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setActiveIndex((prev) => (prev + 1) % characters.length);
  };

  return (
    <section
      ref={sectionRef}
      id="characters"
      className="relative min-h-screen w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div
          className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-amber-500/20 backdrop-blur-sm border border-amber-500/50 rounded-full mb-6">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-400 text-sm font-medium">
              ⚡ Wizarding World
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent animate-gradient-text">
              LEGENDARY
            </span>
            <br />
            <span className="text-white">WIZARDS</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Discover the most powerful and iconic witches and wizards who shaped
            the destiny of the magical world
          </p>
        </div>
      </div>

      {/* 3D Carousel */}
      <div className="relative perspective-[2000px] h-[700px] mb-20">
        <div className="relative w-full h-full preserve-3d">
          {characters.map((character, index) => {
            const style = getCardStyle(index);
            const isActive = index === activeIndex;

            return (
              <div
                key={character.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out cursor-pointer"
                style={style}
                onClick={() => {
                  if (isActive) {
                    setSelectedCharacter(character);
                  } else {
                    setActiveIndex(index);
                    setIsAutoPlay(false);
                  }
                }}
              >
                <div
                  className={`relative w-[350px] h-[500px] rounded-2xl overflow-hidden border-4 transition-all duration-500 ${isActive
                    ? "border-amber-400 shadow-2xl shadow-amber-400/50"
                    : "border-amber-400/30 shadow-xl"
                    }`}
                >
                  {/* Character Image */}
                  <Image
                    src={character.image}
                    alt={character.name}
                    fill
                    className="object-cover"
                    quality={90}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                  {/* Character Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-all duration-500">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                      <span className="text-amber-400 text-sm font-medium">
                        {character.rank}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-white mb-2">
                      {character.name}
                    </h3>
                    <p className="text-amber-400 text-sm mb-4">
                      {character.title}
                    </p>

                    {isActive && (
                      <div className="space-y-3 animate-fade-in">
                        <div className="flex items-center space-x-2 text-gray-300 text-sm">
                          <svg
                            className="w-4 h-4 text-amber-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                          </svg>
                          <span>{character.clan} House</span>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {character.abilities.slice(0, 2).map((ability, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-amber-500/20 border border-amber-500/50 rounded-full text-xs text-amber-300"
                            >
                              {ability}
                            </span>
                          ))}
                        </div>

                        <button className="w-full px-4 py-2 bg-gradient-to-r from-amber-500 to-purple-700 text-white rounded-lg font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                          View Details
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-purple-700 rounded-full flex items-center justify-center shadow-lg shadow-amber-400/50 border-2 border-white/20">
                      <span className="text-white font-bold text-lg">
                        #{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="relative z-20 flex justify-center items-center space-x-8">
        <button
          onClick={handlePrev}
          className="group w-14 h-14 bg-gradient-to-r from-amber-500 to-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-amber-500/30"
        >
          <svg
            className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex space-x-2">
          {characters.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlay(false);
              }}
              className={`transition-all duration-300 rounded-full ${index === activeIndex
                ? "w-12 h-3 bg-gradient-to-r from-amber-400 to-purple-700"
                : "w-3 h-3 bg-gray-600 hover:bg-amber-500/50"
                }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="group w-14 h-14 bg-gradient-to-r from-amber-500 to-purple-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg shadow-amber-500/30"
        >
          <svg
            className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
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
        </button>
      </div>

      {/* Auto-play Toggle */}
      <div className="relative z-20 flex justify-center mt-8">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${isAutoPlay
            ? "bg-gradient-to-r from-amber-500 to-purple-700 text-white shadow-lg shadow-amber-500/30"
            : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
        >
          {isAutoPlay ? "⏸ Pause" : "▶ Auto Play"}
        </button>
      </div>

      {/* Character Modal */}
      {selectedCharacter && (
        <CharacterModal
          character={selectedCharacter}
          onClose={() => setSelectedCharacter(null)}
        />
      )}
    </section>
  );
};

export default Characters;
