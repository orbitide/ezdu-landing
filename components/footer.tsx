'use client';



import { Facebook, GraduationCap, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
    const footerLinks = {
        Features: ['Question Bank', 'Mock Tests', 'Daily Tests', 'Leaderboard'],
        Support: ['Help Center', 'FAQs', 'Contact Us', 'Community'],
        Company: ['About Us', 'Careers', 'Blog', 'Press Kit'],
        Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
    };

    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-5 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                                <GraduationCap className="text-white" size={24} />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                EzDu
              </span>
                        </div>
                        <p className="text-gray-400 mb-4 leading-relaxed">
                            Empowering students worldwide with AI-powered learning tools.
                            Learn smarter, achieve more.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-500/20 hover:text-emerald-400 text-gray-400 transition-all"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="font-bold text-white mb-4">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 EzDu. All rights reserved. Built with ❤️ for learners everywhere.</p>
                </div>
            </div>
        </footer>
    );
};