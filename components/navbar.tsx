'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className="fixed top-0 left-0 right-0 z-50  backdrop-blur-lg border-b border-slate-800"
        >
            <div className="container mx-auto px-4 py-2">
                <Link href="/">
                    <div className="flex items-center justify-between">
                        <motion.div
                            className="flex items-center gap-2"
                            whileHover={{scale: 1.05}}
                        >
                            <Image alt="ezdu-logo" src="/logo.png" width={36} height={32}/>
                            <span
                                className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> EzDu </span>
                        </motion.div>

                    </div>
                </Link>

            </div>
        </motion.nav>
    );
};