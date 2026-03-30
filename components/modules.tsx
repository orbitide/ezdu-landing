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
            title: 'গোছানো লেসন',
            description: 'বিগিনার থেকে এক্সপার্ট পর্যন্ত সাজানো লার্নিং পাথ অনুসরণ করো',
            icon: BookOpen,
        },
        {
            title: 'প্র্যাকটিস মোড',
            description: 'তোমার পারফরম্যান্স অনুযায়ী কাস্টমাইজড প্র্যাকটিস, যতক্ষণ খুশি',
            icon: Target,
        },
        {
            title: 'স্ট্রিক সিস্টেম',
            description: 'ডেইলি স্ট্রিক আর রিওয়ার্ড দিয়ে পড়ার অভ্যাস গড়ে তোলো',
            icon: TrendingUp,
        },
        {
            title: 'এক্সপি রিওয়ার্ড',
            description: 'এগিয়ে যাও, পয়েন্ট আয় করো, আনলক করো নতুন অ্যাচিভমেন্ট',
            icon: Zap,
        },
    ];

    return (
        <section id="modules" className="py-20 surface-section-muted">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        কার্যকর লার্নিং {' '}
                        <span className="text-emerald-400">মডিউলস</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        শেখার গতি বাড়াতে সব কিছু এক জায়গায়
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
                                    <div className="w-12 h-12 rounded-lg bg-zinc-800/80 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                                        <module.icon className="text-emerald-400" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed">{module.description}</p>
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