'use client';

import { motion } from "framer-motion";
import { Apple, Award, Download, Sparkles, Trophy } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [360, 180, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                />
            </div>

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
                        className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6"
                    >
                        <Sparkles size={16} className="text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">Your Learning Companion</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="block bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 bg-clip-text text-transparent">
                            Learn Smarter,
                        </span>
                        <span
                            className="block bg-gradient-to-r from-emerald-300 via-3eal-300 to-cyan-300 bg-clip-text text-transparent">
                            Not Harder
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Master any subject with AI-powered questions, daily challenges, and gamified learning.
                        Join thousands of students achieving their goals with EzDu.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition border border-gray-700">
                            <Apple size={20} />
                            <div className="text-left">
                                <div className="text-xs text-gray-300">Download on</div>
                                <div className="text-lg font-semibold">App Store</div>
                            </div>
                        </button>

                        <button
                            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition border border-gray-700">
                            <Download size={20} />
                            <div className="text-left">
                                <div className="text-xs text-gray-300">Get it on</div>
                                <div className="text-lg font-semibold">Google Play</div>
                            </div>
                        </button>
                    </div>

                    {/*<motion.div*/}
                    {/*    className="flex items-center gap-8 mt-12"*/}
                    {/*    initial={{ opacity: 0 }}*/}
                    {/*    animate={{ opacity: 1 }}*/}
                    {/*    transition={{ delay: 0.6 }}*/}
                    {/*>*/}
                    {/*    <div>*/}
                    {/*        <div className="text-3xl font-bold text-emerald-400">10K+</div>*/}
                    {/*        <div className="text-gray-400 text-sm">Active Students</div>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <div className="text-3xl font-bold text-teal-400">50K+</div>*/}
                    {/*        <div className="text-gray-400 text-sm">Questions Solved</div>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <div className="text-3xl font-bold text-cyan-400">4.8★</div>*/}
                    {/*        <div className="text-gray-400 text-sm">App Rating</div>*/}
                    {/*    </div>*/}
                    {/*</motion.div>*/}


                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <div className="w-full max-w-[390px] md:max-w-[280px] mx-auto">
                            <Image
                                src="/ss.png"
                                alt="EzDu App"
                                width={390}
                                height={900}
                                className="w-full rounded-3xl shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="absolute top-6 -left-8 bg-slate-800 border border-emerald-500/30 rounded-xl p-4 shadow-lg"
                    >
                        <Trophy className="text-emerald-400 mb-2" size={20} />
                        <div className="text-sm text-white font-semibold">Top 10%</div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-6 -right-8 bg-slate-800 border border-teal-500/30 rounded-xl p-4 shadow-lg"
                    >
                        <Award className="text-teal-400 mb-2" size={20} />
                        <div className="text-sm text-white font-semibold">5 Badges</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};