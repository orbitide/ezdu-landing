'use client';

import { motion, useInView } from "framer-motion";
import { BookOpen, Brain, Calendar, Clock, GraduationCap, Target, Trophy, Zap } from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";

export const Features = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const features = [
        { icon: BookOpen, title: 'Question Bank', description: '10,000+ curated questions across all subjects' },
        { icon: Brain, title: 'AI Explanations', description: 'Detailed step-by-step solutions for every question' },
        { icon: Target, title: 'Mock Tests', description: 'Real exam simulations with instant results' },
        { icon: Calendar, title: 'Daily Test', description: 'Quick 10-min tests to keep you sharp' },
        { icon: Clock, title: 'Weekly Test', description: 'Comprehensive weekly assessments' },
        { icon: Zap, title: 'XP System', description: 'Earn points and level up as you learn' },
        { icon: Trophy, title: 'Leaderboard', description: 'Compete with friends and top performers' },
        { icon: GraduationCap, title: 'Lessons', description: 'Structured courses from basics to advanced' },
    ];

    return (
        <section id="features" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Everything you need to{' '}
                        <span className="text-emerald-400">excel in your studies</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Powerful features designed to make learning effective, engaging, and fun
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="h-full surface-raised-hover transition-colors duration-300 group cursor-pointer">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="w-14 h-14 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-4 transition-colors group-hover:border-emerald-600/40"
                                >
                                    <feature.icon className="text-emerald-400" size={28} />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};