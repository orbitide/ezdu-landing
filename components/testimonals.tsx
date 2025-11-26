'use client';

import React from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'Medical Student',
            avatar: '👩‍⚕️',
            rating: 5,
            text: 'EzDu transformed my study routine. The daily tests keep me consistent, and the XP system makes learning addictive!'
        },
        {
            name: 'Alex Chen',
            role: 'Engineering Student',
            avatar: '👨‍💻',
            rating: 5,
            text: 'Best learning app I\'ve used. The AI explanations are incredibly detailed, and the mock tests perfectly simulate real exams.'
        },
        {
            name: 'Priya Sharma',
            role: 'High School Student',
            avatar: '👩‍🎓',
            rating: 5,
            text: 'I love the gamification! Competing on the leaderboard with my friends makes studying so much more fun.'
        }
    ];

    return (
        <section className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Loved by Students
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Worldwide
            </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.15 }}
                        >
                            <Card className="h-full hover:scale-105 transition-transform duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="text-4xl">{testimonial.avatar}</div>
                                    <div>
                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                                    ))}
                                </div>
                                <p className="text-gray-300 leading-relaxed">{testimonial.text}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};