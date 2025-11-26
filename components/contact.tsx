'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card } from './ui/card';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export const Contact = () => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('Thanks for reaching out! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Get in
                        <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Touch
            </span>
                    </h2>
                    <p className="text-xl text-gray-400">
                        Have questions? We&apos;d love to hear from you
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                    >
                        <Card className="h-full">
                            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-gray-300 mb-2">Name</label>
                                    <Input
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2">Message</label>
                                    <Textarea
                                        placeholder="How can we help you?"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        required
                                    />
                                </div>
                                <Button type="submit" className="w-full justify-center">
                                    Send Message
                                    <ChevronRight size={20} />
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        className="space-y-6"
                    >
                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-emerald-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Email</h4>
                                    <p className="text-gray-400">support@ezdu.com</p>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-teal-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Phone</h4>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-cyan-400" size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Location</h4>
                                    <p className="text-gray-400">San Francisco, CA 94102</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/30">
                            <h4 className="font-bold text-white mb-3">Follow Us</h4>
                            <div className="flex gap-3">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                    <a
                                        key={i}
                                        href="#"
                                        className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-400 transition-all"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};