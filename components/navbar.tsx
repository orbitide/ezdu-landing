'use client';

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";


export const Navbar = () => {

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className="fixed top-0 left-0 right-0 z-50  backdrop-blur-lg border-b border-slate-800"
        >
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{scale: 1.05}}
                    >
                        <div
                            className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                            <GraduationCap className="text-white" size={16}/>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> EzDu </span>
                    </motion.div>

                </div>

            </div>
        </motion.nav>
    );
};