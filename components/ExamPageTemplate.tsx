'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, HelpCircle, CheckCircle2 } from 'lucide-react';

export type ExamFeature = {
    icon: string;
    title: string;
    description: string;
};

export type ExamFaq = {
    question: string;
    answer: string;
};

export type ExamPageConfig = {
    slug: string;
    badge: string;
    headline: string;
    subheadline: string;
    description: string;
    color: 'emerald' | 'blue' | 'purple' | 'rose' | 'amber' | 'indigo' | 'cyan';
    stats: { label: string; value: string }[];
    features: ExamFeature[];
    faqs: ExamFaq[];
    playStoreUrl?: string;
};

// --- Unified Color & Style Map ---
const themeMap = {
    // PRIMARY: Balanced Emerald
    emerald: {
        bgGradient: 'from-emerald-500/10 via-black to-black',
        text: 'text-emerald-400',
        border: 'border-emerald-500/20',
        badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        btn: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-900/30',
        icon: 'text-emerald-400 bg-emerald-500/10',
    },
    // Adjusted for deeper depth to match Emerald's weight
    blue: {
        bgGradient: 'from-blue-500/10 via-black to-black',
        text: 'text-blue-400',
        border: 'border-blue-500/20',
        badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
        btn: 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-900/30',
        icon: 'text-blue-400 bg-blue-500/10',
    },
    // Slightly desaturated to prevent "neon vibration"
    purple: {
        bgGradient: 'from-purple-500/10 via-black to-black',
        text: 'text-purple-400',
        border: 'border-purple-500/20',
        badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
        btn: 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/30',
        icon: 'text-purple-400 bg-purple-500/10',
    },
    // Moved to Rose-400 for better text contrast on black
    rose: {
        bgGradient: 'from-rose-500/10 via-black to-black',
        text: 'text-rose-400',
        border: 'border-rose-500/20',
        badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
        btn: 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-900/30',
        icon: 'text-rose-400 bg-rose-500/10',
    },
    // Shifted toward Amber-400 (warmer, less "yellow/dirty" than 500)
    amber: {
        bgGradient: 'from-amber-500/10 via-black to-black',
        text: 'text-amber-400',
        border: 'border-amber-500/20',
        badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
        btn: 'bg-amber-500 hover:bg-amber-400 text-black font-semibold shadow-amber-900/30',
        icon: 'text-amber-400 bg-amber-500/10',
    },
    // Indigo is naturally darker; boosted to 400 for text clarity
    indigo: {
        bgGradient: 'from-indigo-500/10 via-black to-black',
        text: 'text-indigo-400',
        border: 'border-indigo-500/20',
        badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
        btn: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-900/30',
        icon: 'text-indigo-400 bg-indigo-500/10',
    },
    // Cyan is very bright; kept at 400 to avoid washing out
    cyan: {
        bgGradient: 'from-cyan-500/10 via-black to-black',
        text: 'text-cyan-400',
        border: 'border-cyan-500/20',
        badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
        btn: 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-900/30',
        icon: 'text-cyan-400 bg-cyan-500/10',
    }
};

const LiveBadge = ({ text, className = '' }: { text: string; className?: string }) => (
    <div className={`inline-flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 mb-6 ${className}`}>
        <span className="live-dot" aria-hidden="true">
            <span className="live-dot-inner" />
        </span>
        <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">{text}</span>
    </div>
);

export default function ExamPageTemplate({ config }: { config: ExamPageConfig }) {
    const t = themeMap[config.color] ?? themeMap.emerald;
    const playStoreUrl = config.playStoreUrl ?? '#';

    return (
        <main className="min-h-screen bg-black text-zinc-300 selection:bg-emerald-500/30">

            {/* ── Hero Section ────────────────────────────── */}
            <section className={`relative overflow-hidden bg-gradient-to-b ${t.bgGradient} pt-32 py-24 px-4`}>
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <LiveBadge text={config.badge} />

                    <h1 className="text-4xl sm:text-6xl font-bold text-white leading-tight tracking-tight">
                        {config.headline.split(' ').map((word, i) => (
                            <span key={i} className={i === config.headline.split(' ').length - 1 ? t.text : ''}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    <p className={`text-xl md:text-2xl font-medium ${t.text}`}>{config.subheadline}</p>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">{config.description}</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                            <Button className={`${t.btn} px-10 py-7 text-lg rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95`}>
                                📲 অ্যাপ ডাউনলোড করো
                            </Button>
                        </a>
                        <Link href="/">
                            <Button variant="outline" className="border-zinc-700 bg-zinc-900/50 text-white px-10 py-7 text-lg rounded-2xl hover:bg-zinc-800 transition-all">
                                আরও জানো
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Stats Section ───────────────────────────── */}
            <section className="py-16 px-4 border-y border-zinc-900 bg-black">
                <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {config.stats.map((s) => (
                        <div key={s.label} className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all hover:border-zinc-700 text-center">
                            <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
                            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Features Section ────────────────────────── */}
            <section className="py-24 px-4 bg-zinc-950/50">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">EzDu-তে যা যা থাকছে</h2>
                        <p className="text-zinc-500 text-lg">আপনার প্রস্তুতির জন্য সবচেয়ে কার্যকর ফিচারগুলো</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {config.features.map((f) => (
                            <Card key={f.title} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all rounded-3xl overflow-hidden group p-2">
                                <CardContent className="p-6 flex gap-6 items-start">
                                    <div className={`text-2xl w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-transform group-hover:scale-110 ${t.icon}`}>
                                        {f.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-xl mb-2">{f.title}</h3>
                                        <p className="text-zinc-400 leading-relaxed">{f.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ Section ─────────────────────────────── */}
            <section className="py-24 px-4 bg-black border-t border-zinc-900">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white">সচরাচর জিজ্ঞাসা</h2>
                    </div>
                    <div className="grid gap-5">
                        {config.faqs.map((faq) => (
                            <div key={faq.question} className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-900/50 transition-all group">
                                <div className="font-bold text-white text-lg mb-4 flex items-center gap-3">
                                    <HelpCircle className={`${t.text} shrink-0`} size={22} />
                                    {faq.question}
                                </div>
                                <div className="text-zinc-400 leading-relaxed pl-8 border-l-2 border-zinc-800 group-hover:border-emerald-500/30 transition-colors">
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Final CTA ───────────────────────────────── */}
            <section className="py-32 px-4 border-t border-zinc-900 text-center relative overflow-hidden">
                <div className={`absolute inset-0 opacity-10 bg-gradient-to-b ${t.bgGradient}`} />
                <div className="relative z-10 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-white">স্বপ্ন হোক সত্যি 🚀</h2>
                    <p className="text-zinc-400 text-lg max-w-md mx-auto">
                        আজই EzDu ডাউনলোড করুন এবং আপনার লক্ষ্য অর্জনে এক ধাপ এগিয়ে থাকুন।
                    </p>
                    <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                        <Button className={`${t.btn} px-12 py-8 text-xl rounded-2xl font-bold shadow-2xl transition-all hover:scale-105`}>
                            📲 Google Play থেকে ডাউনলোড করো
                        </Button>
                    </a>
                </div>
            </section>

        </main>
    );
}