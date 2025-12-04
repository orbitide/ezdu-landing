'use client';

import { motion } from "framer-motion";
import { Apple, Award, Download, GraduationCap, Sparkles, Trophy } from "lucide-react";

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
                        Learn Smarter,
                        <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Not Harder
            </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                        Master any subject with AI-powered questions, daily challenges, and gamified learning.
                        Join thousands of students achieving their goals with EzDu.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition border border-gray-700">
                            <Apple size={20} />
                            <div className="text-left">
                                <div className="text-xs text-gray-300">Download on</div>
                                <div className="text-lg font-semibold">App Store</div>
                            </div>
                        </button>

                        <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition border border-gray-700">
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
                        <div className="w-full max-w-sm mx-auto aspect-[9/16] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border-4 border-slate-700 shadow-2xl overflow-hidden">
                            <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                                    <GraduationCap size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">EzDu App</h3>
                                <p className="text-gray-400 mb-6">Your pocket learning companion</p>
                                <div className="w-full space-y-3">
                                    <div className="bg-slate-700/50 rounded-lg p-3 text-left">
                                        <div className="text-sm text-gray-400 mb-1">Daily Streak</div>
                                        <div className="text-emerald-400 font-bold">🔥 15 Days</div>
                                    </div>
                                    <div className="bg-slate-700/50 rounded-lg p-3 text-left">
                                        <div className="text-sm text-gray-400 mb-1">XP Points</div>
                                        <div className="text-teal-400 font-bold">⚡ 2,450 XP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Badges */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="absolute top-10 -left-10 bg-slate-800 border border-emerald-500/30 rounded-xl p-4 shadow-lg"
                    >
                        <Trophy className="text-emerald-400 mb-2" size={24} />
                        <div className="text-sm text-white font-semibold">Top 10%</div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="absolute bottom-10 -right-10 bg-slate-800 border border-teal-500/30 rounded-xl p-4 shadow-lg"
                    >
                        <Award className="text-teal-400 mb-2" size={24} />
                        <div className="text-sm text-white font-semibold">5 Badges</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};