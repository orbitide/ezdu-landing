'use client';

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export const Footer = () => {
    const footerLinks = {
        Features: [
            { title: 'Question Bank', link: '/question-bank' },
            { title: 'Mock Tests', link: '/mock-tests' },
            { title: 'Daily Tests', link: '/daily-tests' },
            { title: 'Leaderboard', link: '/leaderboard' },
        ],
        Support: [
            { title: 'Help Center', link: '/help' },
            { title: 'FAQs', link: '/faqs' },
            { title: 'Contact Us', link: '/contact' },
            { title: 'Community', link: '/community' },
        ],
        Company: [
            { title: 'About Us', link: '/about' },
            { title: 'Careers', link: '/career' },
            { title: 'Blog', link: '/blog' },
        ],
    };

    const legalLinks = [
        { title: 'Privacy Policy', link: '/privacy-policy' },
        { title: 'Terms of Service', link: '/terms' },
        { title: 'Cookie Policy', link: '/cookies' },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-800">
            <div className="container mx-auto px-4 py-12">

                {/* Top Section */}
                <div className="grid md:grid-cols-4 gap-8 mb-10">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Image alt="ezdu-logo" src="/logo.png" width={40} height={32}/>
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                ezdu
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm mb-4">
                            AI-powered learning for smarter exam preparation.
                        </p>

                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/20 transition"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-semibold text-white mb-3">{category}</h4>
                            <ul className="space-y-2 text-sm">
                                {links.map(({ title, link }) => (
                                    <li key={title}>
                                        <a
                                            href={link}
                                            className="text-gray-400 hover:text-emerald-400 transition-colors"
                                        >
                                            {title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Legal Row */}
                <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© 2024 ezdu. All rights reserved.</p>

                    <ul className="flex gap-4 flex-wrap justify-center">
                        {legalLinks.map(({ title, link }) => (
                            <li key={title}>
                                <a
                                    href={link}
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
};
