'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DownloadButton } from '@/components/ui/download-button';
import { ExamIcon, type ExamIconName } from '@/lib/exam-icons';
import { cn } from '@/lib/utils';
import { Check, HelpCircle } from 'lucide-react';

export type ExamFeature = {
    icon: ExamIconName;
    title: string;
    description: string;
};

export type ExamFaq = {
    question: string;
    answer: string;
};

export type ExamStat = { label: string; value: string } | { label: string; valueCheck: true };

export type ExamPageConfig = {
    slug: string;
    badge: string;
    badgeIcon?: ExamIconName;
    headline: string;
    subheadline: string;
    description: string;
    color: 'emerald' | 'blue' | 'purple' | 'rose' | 'amber' | 'indigo' | 'cyan' | 'orange' | 'green';
    stats: ExamStat[];
    features: ExamFeature[];
    faqs: ExamFaq[];
    playStoreUrl?: string;
};

const themeMap = {
    emerald: {
        text: 'text-emerald-400',
        icon: 'text-emerald-400 bg-emerald-500/10',
    },
    blue: {
        text: 'text-blue-400',
        icon: 'text-blue-400 bg-blue-500/10',
    },
    purple: {
        text: 'text-purple-400',
        icon: 'text-purple-400 bg-purple-500/10',
    },
    rose: {
        text: 'text-rose-400',
        icon: 'text-rose-400 bg-rose-500/10',
    },
    amber: {
        text: 'text-amber-400',
        icon: 'text-amber-400 bg-amber-500/10',
    },
    indigo: {
        text: 'text-indigo-400',
        icon: 'text-indigo-400 bg-indigo-500/10',
    },
    cyan: {
        text: 'text-cyan-400',
        icon: 'text-cyan-400 bg-cyan-500/10',
    },
    orange: {
        text: 'text-orange-400',
        icon: 'text-orange-400 bg-orange-500/10',
    },
    green: {
        text: 'text-green-400',
        icon: 'text-green-400 bg-green-500/10',
    },
};

const LiveBadge = ({
    text,
    badgeIcon,
    iconClassName,
    className = '',
}: {
    text: string;
    badgeIcon?: ExamIconName;
    iconClassName?: string;
    className?: string;
}) => (
    <div
        className={cn(
            'inline-flex items-center gap-2.5 rounded-full border border-zinc-700 bg-zinc-900/60 px-4 py-2 mb-6',
            className,
        )}
    >
        <span className="live-dot" aria-hidden="true">
            <span className="live-dot-inner" />
        </span>
        {badgeIcon ? <ExamIcon name={badgeIcon} size={14} className={cn('shrink-0', iconClassName)} /> : null}
        <span className="text-xs font-medium text-zinc-300">{text}</span>
    </div>
);

export default function ExamPageTemplate({ config }: { config: ExamPageConfig }) {
    const t = themeMap[config.color] ?? themeMap.emerald;

    return (
        <div className="min-h-screen bg-black text-zinc-300 selection:bg-emerald-500/30">
            <section className="relative overflow-hidden bg-black pt-8 pb-20 md:pt-12 md:pb-24 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                    <LiveBadge text={config.badge} badgeIcon={config.badgeIcon} iconClassName={t.text} />

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                        {config.headline.split(' ').map((word, i) => (
                            <span key={i} className={i === config.headline.split(' ').length - 1 ? t.text : ''}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    <p className={cn('text-lg md:text-xl font-medium', t.text)}>{config.subheadline}</p>
                    <p className="text-zinc-400 max-w-xl mx-auto leading-relaxed">{config.description}</p>

                    <div className="flex flex-col items-center gap-4 pt-6">
                        <div className="flex flex-wrap gap-4 justify-center">
                            <DownloadButton type="apple" className="border-2 cursor-pointer" />
                            <DownloadButton type="google" className="border-2 cursor-pointer" />
                        </div>
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="border-zinc-700 bg-zinc-900/50 text-white px-8 py-6 text-base rounded-2xl hover:bg-zinc-800 transition-all"
                            >
                                আরও জানো
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 border-y border-zinc-900 bg-black">
                <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {config.stats.map((s) => (
                        <div
                            key={s.label}
                            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all hover:border-zinc-700 text-center"
                        >
                            <div className="text-3xl font-bold text-white mb-1 flex justify-center items-center min-h-[2.25rem]">
                                {'valueCheck' in s && s.valueCheck ? (
                                    <Check className={t.text} size={32} strokeWidth={2.5} aria-hidden />
                                ) : (
                                    'value' in s && s.value
                                )}
                            </div>
                            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 px-4 bg-zinc-950/50">
                <div className="max-w-5xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">EzDu-তে যা পাবেন</h2>
                        <p className="text-zinc-500 text-base md:text-lg max-w-2xl mx-auto">
                            এই প্রস্তুতির জন্য অ্যাপে থাকা মূল সুবিধাগুলো
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {config.features.map((f) => (
                            <Card
                                key={f.title}
                                className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors rounded-3xl overflow-hidden group p-2"
                            >
                                <CardContent className="p-6 flex gap-6 items-start">
                                    <div
                                        className={cn(
                                            'w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-zinc-800/80 transition-colors group-hover:border-zinc-600/60',
                                            t.icon,
                                        )}
                                    >
                                        <ExamIcon name={f.icon} size={22} className="text-current" />
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

            <section className="py-24 px-4 bg-black border-t border-zinc-900">
                <div className="max-w-3xl mx-auto space-y-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white">সচরাচর জিজ্ঞাসা</h2>
                    </div>
                    <div className="grid gap-5">
                        {config.faqs.map((faq) => (
                            <div
                                key={faq.question}
                                className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-8 hover:bg-zinc-900/50 transition-all group"
                            >
                                <div className="font-bold text-white text-lg mb-4 flex items-center gap-3">
                                    <HelpCircle className={cn(t.text, 'shrink-0')} size={22} />
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

            <section className="py-32 px-4 border-t border-zinc-900 text-center bg-black">
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white">EzDu দিয়ে শুরু করুন</h2>
                    <p className="text-zinc-400 leading-relaxed max-w-md mx-auto">
                        অ্যাপ ডাউনলোড করে আজই প্রথম প্র্যাকটিস সেট বা মক টেস্ট চালিয়ে দেখুন।
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <DownloadButton type="apple" className="border-2 cursor-pointer" />
                        <DownloadButton type="google" className="border-2 cursor-pointer" />
                    </div>
                </div>
            </section>
        </div>
    );
}
