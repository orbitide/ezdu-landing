'use client';

import { motion, useReducedMotion } from "framer-motion";
import { Apple, Award, Download, Trophy } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
    const reduceMotion = useReducedMotion();
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            <div className="container mx-auto xl:w-7xl px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
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
                        <span className="text-xs font-medium text-zinc-300">লক্ষ্যের পথে তোমার সঙ্গী</span>
                    </motion.div>


                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 text-white">
                        <span className="block">শেখো প্রতিদিন,</span>
                        <span className="block text-emerald-400">জিতো প্রতিবার</span>
                    </h1>


                    <p className=" text-zinc-400 mb-8 leading-relaxed max-w-xl">
                        পার্সোনালাইজড প্র্যাকটিস আর রিয়েল-টাইম প্রোগ্রেস দিয়ে EzDu তোমার লক্ষ্যে পৌঁছানো সহজ করে দেয় . . .
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

                    <motion.div
                        className="absolute top-6 -left-8 surface-raised border-zinc-700/90 p-4 shadow-lg"
                        animate={
                            reduceMotion
                                ? { y: 0 }
                                : { y: [0, -12, 0],scale: [1, 1.02, 1] }
                        }
                        transition={
                            reduceMotion
                                ? { duration: 0 }
                                : {
                                      duration: 3,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                  }
                        }
                    >
                        <motion.div
                            className="mb-2 inline-block text-emerald-400"
                            animate={
                                reduceMotion
                                    ? { opacity: 1, filter: "brightness(1)" }
                                    : {
                                          opacity: [0.88, 1, 0.88],
                                          filter: [
                                              "brightness(1)",
                                              "brightness(1.12)",
                                              "brightness(1)",
                                          ],
                                      }
                            }
                            transition={
                                reduceMotion
                                    ? { duration: 0 }
                                    : {
                                          duration: 3.8,
                                          repeat: Infinity,
                                          ease: "easeInOut",
                                      }
                            }
                        >
                            <Trophy size={20} />
                        </motion.div>
                        <div className="text-sm font-semibold text-white">Top 10%</div>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-6 -right-8 surface-raised border-zinc-700/90 p-4 shadow-lg"
                        animate={
                            reduceMotion
                                ? { y: 0 }
                                : { y: [0, 12, 0],
                                    scale: [1, 0.98, 1] }
                        }
                        transition={
                            reduceMotion
                                ? { duration: 0 }
                                : {
                                      duration: 3.2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                      delay: 0.6,
                                  }
                        }
                    >
                        <motion.div
                            className="mb-2 inline-block text-emerald-400"
                            animate={
                                reduceMotion
                                    ? { opacity: 1, filter: "brightness(1)" }
                                    : {
                                          opacity: [0.88, 1, 0.88],
                                          filter: [
                                              "brightness(1)",
                                              "brightness(1.1)",
                                              "brightness(1)",
                                          ],
                                      }
                            }
                            transition={
                                reduceMotion
                                    ? { duration: 0 }
                                    : {
                                          duration: 4.2,
                                          repeat: Infinity,
                                          ease: "easeInOut",
                                          delay: 0.5,
                                      }
                            }
                        >
                            <Award size={20} />
                        </motion.div>
                        <div className="text-sm font-semibold text-white">5 Badges</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
