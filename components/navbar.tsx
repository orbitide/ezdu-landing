'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800"
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{scale: 1.05}}
                    >
                        <div
                            className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                            <GraduationCap className="text-white" size={24}/>
                        </div>
                        <span
                            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
        EzDu
        </span>
                    </motion.div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {['Features', 'Modules', 'Pricing', 'Blog', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`}
                               className="text-gray-300 hover:text-emerald-400 transition-colors">
                                {item}
                            </a>
                        ))}
                        <Button>Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        className="md:hidden mt-4 py-4 space-y-4"
                    >
                        {['Features', 'Modules', 'Pricing', 'Blog', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block text-gray-300 hover:text-emerald-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <Button className="w-full justify-center">Get Started</Button>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};