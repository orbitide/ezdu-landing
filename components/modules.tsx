'use client';

import { motion, useInView } from "framer-motion";
import React from "react";
import { BookOpen, Target, TrendingUp, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export const EdtechModules = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const modules = [
        {
            title: 'Structured Lessons',
            description: 'Follow carefully crafted learning paths from beginner to expert',
            icon: BookOpen,
            color: 'emerald'
        },
        {
            title: 'Practice Mode',
            description: 'Unlimited practice with adaptive difficulty based on your performance',
            icon: Target,
            color: 'teal'
        },
        {
            title: 'Streak System',
            description: 'Build consistent study habits with daily streaks and rewards',
            icon: TrendingUp,
            color: 'cyan'
        },
        {
            title: 'XP Rewards',
            description: 'Earn experience points and unlock achievements as you progress',
            icon: Zap,
            color: 'purple'
        },
    ];

    return (
        <section id="modules" className="py-20 bg-slate-950/80">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Powerful Learning
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Modules
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Comprehensive tools to accelerate your learning journey
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {modules.map((module, index) => (
                        <motion.div
                            key={module.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <Card className="h-full hover:scale-105 transition-transform duration-300">
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 bg-gradient-to-br from-${module.color}-500/20 to-${module.color}-600/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                        <module.icon className={`text-${module.color}-400`} size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">{module.description}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};