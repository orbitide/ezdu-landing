'use client';

import React from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BookOpen, ChevronRight } from "lucide-react";

export const Blog = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const posts = [
        {
            title: '10 Study Techniques That Actually Work',
            excerpt: 'Discover evidence-based learning strategies used by top performers...',
            category: 'Study Tips',
            date: 'Nov 20, 2024'
        },
        {
            title: 'How to Build a Consistent Study Routine',
            excerpt: 'Learn the secrets to maintaining daily study habits without burnout...',
            category: 'Productivity',
            date: 'Nov 18, 2024'
        },
        {
            title: 'The Science Behind Spaced Repetition',
            excerpt: 'Understanding why spaced repetition is the most effective learning method...',
            category: 'Science',
            date: 'Nov 15, 2024'
        }
    ];

    return (
        <section id="blog" className="py-20">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Latest from
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Our Blog
            </span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Tips, insights, and updates to help you learn better
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15 }}
                        >
                            <Card className="h-full hover:scale-105 transition-transform duration-300 cursor-pointer group">
                                <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg mb-4 flex items-center justify-center">
                                    <BookOpen className="text-emerald-400" size={48} />
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                                    <span className="text-xs text-gray-400">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <a href="#" className="text-emerald-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read More
                                    <ChevronRight size={16} />
                                </a>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};