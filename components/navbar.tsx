'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinkClass =
    "text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors";

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 surface-chrome border-b"
            aria-label="Main"
        >
            <div className="container mx-auto px-4 py-2 flex items-center justify-between gap-6">
                <Link href="/" className="flex items-center shrink-0">
                    <motion.div
                        className="flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image alt="ezdu-logo" src="/logo.png" width={36} height={32} />
                        <span className="text-2xl font-bold text-white tracking-tight">
                            EzDu
                        </span>
                    </motion.div>
                </Link>

                {/*<div className="flex items-center gap-5 sm:gap-8">*/}
                {/*    <Link href="/about" className={navLinkClass}>*/}
                {/*        About*/}
                {/*    </Link>*/}
                {/*    <Link href="/career" className={navLinkClass}>*/}
                {/*        Careers*/}
                {/*    </Link>*/}
                {/*    <Link href="/contact" className={navLinkClass}>*/}
                {/*        Contact*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </div>
        </motion.nav>
    );
};
