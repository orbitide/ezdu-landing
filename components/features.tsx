'use client';

import { motion, useInView } from "framer-motion";
import { BookOpen, Brain, Calendar, Clock, GraduationCap, Target, Trophy, Zap } from "lucide-react";
import React from "react";
import { Card } from "@/components/ui/card";

export const Features = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});

    const features = [
        {icon: BookOpen, title: 'প্রশ্ন ব্যাংক', description: 'সব বিষয়ে ১০,০০০+ কিউরেটেড প্রশ্ন'},
        {icon: Brain, title: 'বিস্তারিত ব্যাখ্যা', description: 'প্রতিটা প্রশ্নের ধাপে ধাপে সমাধান'},
        {icon: Target, title: 'মক টেস্ট', description: 'রিয়েল এক্সামের মতো সিমুলেশন, তাৎক্ষণিক রেজাল্ট'},
        {icon: Calendar, title: 'ডেইলি টেস্ট', description: 'প্রতিদিন ১০ মিনিটে নিজেকে ঝালাই করো'},
        {icon: Clock, title: 'সাপ্তাহিক টেস্ট', description: 'প্রতি সপ্তাহের পূর্ণাঙ্গ মূল্যায়ন'},
        {icon: Zap, title: 'XP সিস্টেম', description: 'শিখতে শিখতে পয়েন্ট আয় করো, লেভেল আপ করো'},
        {icon: Trophy, title: 'লিডারবোর্ড ', description: 'বন্ধুদের সাথে প্রতিযোগিতায় এগিয়ে থাকো'},
        {icon: GraduationCap, title: 'লেসন', description: 'বেসিক থেকে অ্যাডভান্সড পর্যন্ত গোছানো কোর্স'},
    ];

    return (
        <section id="features" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.6}}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        পড়াশোনায় এক ধাপ এগিয়ে থাকতে {' '}
                        <span className="text-emerald-400">সব কিছু এক জায়গায়</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        শেখাকে কার্যকর আর উপভোগ্য করতেই প্রতিটা ফিচার তৈরি
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                        >
                            <Card
                                className="h-full surface-raised-hover transition-colors duration-300 group cursor-pointer">
                                <motion.div
                                    whileHover={{scale: 1.05}}
                                    className="w-14 h-14 rounded-xl bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-4 transition-colors group-hover:border-emerald-600/40"
                                >
                                    <feature.icon className="text-emerald-400" size={28}/>
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