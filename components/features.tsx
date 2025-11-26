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
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Everything You Need to
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Excel in Your Studies
            </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
                            <Card className="h-full hover:shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 group cursor-pointer">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all"
                                >
                                    <feature.icon className="text-emerald-400" size={28} />
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
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