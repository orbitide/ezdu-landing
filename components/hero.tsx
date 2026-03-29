'use client';

import { motion } from "framer-motion";
import { Apple, Award, Download, Trophy } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="badge-live inline-flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 mb-6"
                    >
                        <span className="live-dot" aria-hidden>
                            <span className="live-dot-inner" />
                        </span>
                        <span className="text-sm font-medium text-zinc-300">Your learning companion</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight text-white">
                        <span className="block">Learn smarter,</span>
                        <span className="block text-emerald-400">not harder</span>
                    </h1>

                    <p className="text-xl text-zinc-400 mb-8 leading-relaxed max-w-xl">
                        Master any subject with AI-powered questions, daily challenges, and gamified learning.
                        Join thousands of students achieving their goals with EzDu.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            type="button"
                            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-100 rounded-lg hover:bg-zinc-800 transition border border-zinc-700"
                        >
                            <Apple size={20} />
                            <div className="text-left">
                                <div className="text-xs text-zinc-500">Download on</div>
                                <div className="text-lg font-semibold">App Store</div>
                            </div>
                        </button>

                        <button
                            type="button"
                            className="flex items-center gap-2 px-6 py-3 bg-zinc-900 text-zinc-100 rounded-lg hover:bg-zinc-800 transition border border-zinc-700"
                        >
                            <Download size={20} />
                            <div className="text-left">
                                <div className="text-xs text-zinc-500">Get it on</div>
                                <div className="text-lg font-semibold">Google Play</div>
                            </div>
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative z-10">
                        <div className="w-full max-w-[390px] min-w-[280px] min-h-[500px] md:max-w-[280px] mx-auto">
                            <Image
                                src="/ss2.png"
                                alt="EzDu App"
                                width={390}
                                height={900}
                                className="w-full min-h-[500px] rounded-3xl shadow-2xl object-cover"
                            />
                        </div>

                    </div>

                    <div className="absolute top-6 -left-8 surface-raised p-4 shadow-lg border-zinc-700">
                        <Trophy className="text-emerald-400 mb-2" size={20} />
                        <div className="text-sm text-white font-semibold">Top 10%</div>
                    </div>

                    <div className="absolute bottom-6 -right-8 surface-raised p-4 shadow-lg border-zinc-700">
                        <Award className="text-emerald-400 mb-2" size={20} />
                        <div className="text-sm text-white font-semibold">5 Badges</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
