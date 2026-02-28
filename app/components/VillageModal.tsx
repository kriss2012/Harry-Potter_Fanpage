import React, { useEffect } from "react";
import Image from "next/image";

interface VillageModalProps {
    village: {
        name: string;
        country: string;
        kage: string;
        symbol: string;
        image: string;
        color: string;
        extendedDescription?: string;
        notableClans?: string[];
        landmarks?: string[];
    } | null;
    onClose: () => void;
}

const VillageModal = ({ village, onClose }: VillageModalProps) => {
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (village) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [village]);

    if (!village) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"></div>

            {/* Modal Content */}
            <div
                className="relative max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl animate-scale-in max-h-[90vh] flex flex-col"
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/50 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header Image */}
                <div className="relative h-48 sm:h-80 w-full shrink-0">
                    <Image
                        src={village.image}
                        alt={village.name}
                        fill
                        className="object-contain object-center bg-black/40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${village.color} opacity-30 mix-blend-overlay`}></div>

                    <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
                        <div className="flex items-center space-x-4 mb-2">
                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wider uppercase">
                                {village.symbol}
                            </span>
                            <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${village.color} text-white shadow-lg text-xs font-bold tracking-wider uppercase`}>
                                {village.kage}: {village.country}
                            </span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black text-white drop-shadow-lg flex items-center gap-4">
                            {village.name}
                        </h2>
                    </div>
                </div>

                {/* Details Body */}
                <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h3 className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${village.color}`}>House History &amp; Lore</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {village.extendedDescription || "Details about this house are closely guarded by its members."}
                                </p>
                            </div>

                            {village.landmarks && (
                                <div>
                                    <h3 className={`text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${village.color}`}>Notable Locations</h3>
                                    <ul className="space-y-2">
                                        {village.landmarks.map((landmark, idx) => (
                                            <li key={idx} className="flex items-center space-x-3 text-gray-300">
                                                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${village.color}`}></span>
                                                <span>{landmark}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div>
                            {village.notableClans && (
                                <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
                                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Notable Members
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {village.notableClans.map((clan, idx) => (
                                            <span key={idx} className="px-3 py-1.5 bg-black/40 border border-white/10 rounded-lg text-sm text-gray-300 font-medium">
                                                {clan}
                                            </span>
                                        ))}
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

export default VillageModal;
