'use client';

import { motion } from 'framer-motion';
import { Users, Target, Heart, Zap, Globe, Sparkles, ArrowRight, Code } from 'lucide-react';

const values = [
    {
        icon: Target,
        title: 'Student-Centric',
        description: 'We put students at the heart of everything we do. Our mission is to make learning accessible, engaging, and effective for every student in Bangladesh.',
    },
    {
        icon: Heart,
        title: 'Passion for Learning',
        description: 'We believe in the transformative power of education. Our team is dedicated to creating tools that inspire curiosity and growth.',
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'We constantly push boundaries with cutting-edge AI technology to deliver the best learning experience possible.',
    },
    {
        icon: Globe,
        title: 'Accessibility',
        description: 'We aim to make quality education accessible to every student, regardless of their background or location.',
    },
];

const team = [
    {
        name: 'Founder & CEO',
        role: 'Product & Vision',
        description: 'Leading the vision to transform education through technology and innovation.',
    },
    {
        name: 'Lead Developer',
        role: 'Tech & Engineering',
        description: 'Building robust and scalable solutions with cutting-edge technologies.',
    },
    {
        name: 'Product Manager',
        role: 'Strategy & UX',
        description: 'Crafting intuitive experiences that make learning engaging and effective.',
    },
    {
        name: 'Educational Advisor',
        role: 'Learning Science',
        description: 'Ensuring our platform aligns with best practices in education.',
    },
];

const features = [
    {
        icon: Zap,
        title: 'AI-Powered Questions',
        description: 'Generate unlimited practice questions tailored to any subject.',
    },
    {
        icon: Target,
        title: 'Smart Learning',
        description: 'Adaptive difficulty and personalized learning paths for each student.',
    },
    {
        icon: Users,
        title: 'Community Focused',
        description: 'Built for Bangladeshi students by understanding local education needs.',
    },
];

const highlights = [
    {
        icon: Users,
        value: '10K+',
        label: 'Active Students',
    },
    {
        icon: Globe,
        value: 'All of Bangladesh',
        label: 'Service Area',
    },
    {
        icon: Zap,
        value: '50K+',
        label: 'Questions Generated',
    },
];

export default function AboutPage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-black via-neutral-950 to-black text-gray-100 overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
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
                        ease: 'linear',
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                />
            </div>

            {/* Hero Section */}
            <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.2}}
                        className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6"
                    >
                        <Sparkles size={16} className="text-emerald-400"/>
                        <span className="text-emerald-400 text-sm font-medium">About EzDu</span>
                    </motion.div>

                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent"
                    >
                        Learning Made Simple in Bangladesh
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        EzDu is a learning platform that helps students prepare and improve. Thousands of learners
                        across Bangladesh use our tools every day to study more effectively.
                    </motion.p>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {highlights.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: index * 0.1}}
                                    viewport={{once: true}}
                                    className="text-center p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-emerald-500/20 hover:border-emerald-500/50 transition-all"
                                >
                                    <Icon className="w-12 h-12 text-emerald-400 mx-auto mb-4"/>
                                    <div
                                        className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-emerald-500/20"
                    >
                        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-4">
                            To revolutionize exam preparation in Bangladesh by providing students with an intelligent,
                            personalized learning platform powered by AI. We believe every student deserves access to
                            quality education and effective learning tools, regardless of their background.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            EzDu combines cutting-edge artificial intelligence with deep understanding of the
                            Bangladeshi education system to create a platform that truly works for our students.
                            We&apos;re actively serving thousands of students and continuously improving our platform
                            based on their feedback.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* What We Offer Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent"
                    >
                        What We Offer
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: index * 0.1}}
                                    viewport={{once: true}}
                                    className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                                >
                                    <Icon className="w-12 h-12 text-emerald-400 mb-4"/>
                                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10 bg-neutral-900/30">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                            Our Story
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                EzDu was born from a simple observation: Bangladeshi students were using generic
                                learning platforms that didn&apos;t understand their unique education system and
                                challenges. Our founders recognized an opportunity to build something specifically for
                                our students.
                            </p>
                            <p>
                                We launched EzDu with a clear vision: to leverage artificial intelligence to make exam
                                preparation more personalized, engaging, and effective. Today, we&apos;re proud to have
                                thousands of active students across Bangladesh who are experiencing smarter learning
                                through our platform.
                            </p>
                            <p>
                                Every day, students use EzDu to practice, learn, and prepare for their exams. We&apos;re
                                committed to continuously improving our platform, adding new features, and expanding our
                                reach to serve even more students across the country.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent"
                    >
                        Our Core Values
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{duration: 0.6, delay: index * 0.1}}
                                    viewport={{once: true}}
                                    className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-emerald-500/20 hover:border-emerald-500/50 transition-all hover:shadow-lg hover:shadow-emerald-500/10"
                                >
                                    <Icon className="w-12 h-12 text-emerald-400 mb-4"/>
                                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-400">{value.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent"
                    >
                        Our Team
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                                className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-emerald-500/20 hover:border-emerald-500/50 transition-all text-center"
                            >
                                <div
                                    className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 mx-auto mb-4 flex items-center justify-center">
                                    <Code className="w-8 h-8 text-emerald-400"/>
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                                <div className="text-emerald-400 font-medium text-sm mb-3">{member.role}</div>
                                <p className="text-gray-400 text-sm">{member.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Bangladesh Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="p-8 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Our Commitment to Bangladesh</h2>
                        <div className="space-y-4 text-gray-400">
                            <p>
                                We&apos;re deeply committed to serving the Bangladeshi education market. Our platform is
                                designed with a thorough understanding of the local education system, curriculum
                                requirements, and the unique challenges faced by our students.
                            </p>
                            <p>
                                While we&apos;re focused on Bangladesh, we&apos;re building infrastructure and features
                                that will allow us to eventually expand to serve students across South Asia and beyond.
                                Our goal is to start with excellence in Bangladesh and scale globally.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="text-center p-12 rounded-3xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 hover:border-emerald-500/60 transition-all"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Join Thousands of Students</h2>
                        <p className="text-lg text-gray-400 mb-8">
                            Experience smarter learning. Download EzDu today and transform how you prepare for exams.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                className="inline-flex items-center gap-2 px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-all border border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-lg hover:shadow-emerald-500/20 group">
                                Download App
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform"/>
                            </button>
                            <button
                                className="px-8 py-3 border-2 border-emerald-500/30 text-emerald-400 rounded-lg font-semibold hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}