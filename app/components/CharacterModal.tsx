"use client";
import React, { useEffect } from "react";
import Image from "next/image";

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

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({
  character,
  onClose,
}) => {
  const [showFullProfile, setShowFullProfile] = React.useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-amber-500/20 animate-scale-in"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="relative h-[600px]">
            <Image
              src={character.image}
              alt={character.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50"></div>

            {/* Role Badge */}
            <div className="absolute bottom-4 left-4">
              <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-purple-700 rounded-full font-bold text-white shadow-lg">
                {character.rank}
              </div>
            </div>
          </div>

          {/* Right Side - Info */}
          <div className="p-8 overflow-y-auto max-h-[600px] custom-scrollbar">
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                  {character.name}
                </h2>
                <p className="text-xl text-amber-400 font-semibold mb-4">
                  {character.title}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {character.description}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
                  <svg
                    className="w-6 h-6 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm">House</span>
                    <span className="text-white font-semibold">{character.clan}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
                  <svg
                    className="w-6 h-6 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm">Affiliation</span>
                    <span className="text-white font-semibold">
                      {character.affiliation}
                    </span>
                  </div>
                </div>
              </div>

              {/* Abilities */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-purple-700 rounded-full"></span>
                  <span>Signature Abilities</span>
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {character.abilities.map((ability, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gradient-to-br from-amber-500/20 to-purple-700/20 rounded-lg border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-105 cursor-pointer group"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-1.5 group-hover:animate-pulse"></div>
                        <span className="text-amber-300 text-sm font-medium">
                          {ability}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setShowFullProfile(!showFullProfile)}
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-purple-700 text-white rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50"
              >
                {showFullProfile ? "Hide Profile" : "View Full Profile"}
              </button>

              {/* Full Profile Content */}
              {showFullProfile && (
                <div className="mt-8 pt-8 border-t border-amber-500/30 animate-fade-in-up space-y-8">
                  {/* Stats */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-purple-700 rounded-full"></span>
                      <span>Wizard Statistics</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { label: "Spellcasting", value: character.stats.ninjutsu, color: "from-blue-400 to-blue-600" },
                        { label: "Dueling", value: character.stats.taijutsu, color: "from-green-400 to-green-600" },
                        { label: "Defence", value: character.stats.genjutsu, color: "from-purple-400 to-purple-600" },
                        { label: "Intelligence", value: character.stats.intelligence, color: "from-yellow-400 to-yellow-600" },
                        { label: "Bravery", value: character.stats.strength, color: "from-red-400 to-red-600" },
                        { label: "Wisdom", value: character.stats.speed, color: "from-amber-400 to-amber-600" },
                      ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300 font-medium">{stat.label}</span>
                            <span className="text-amber-400 font-bold">{stat.value}/100</span>
                          </div>
                          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                              style={{ width: `${stat.value}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backstory */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-amber-400 to-purple-700 rounded-full"></span>
                      <span>Background</span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed p-6 bg-white/5 border border-white/10 rounded-xl italic">
                      &ldquo;{character.backstory}&rdquo;
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
