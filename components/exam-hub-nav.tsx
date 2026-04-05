'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { EXAM_PATHS, normalizePathname } from '@/lib/exam-routes';

const LINKS = EXAM_PATHS.map((href) => {
    const label =
        href === '/vocabulary'
            ? 'Vocabulary'
            : href.slice(1).toUpperCase();
    return { href, label };
});

const scrollHide =
    'touch-pan-x overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden';

/** Compact exam switcher for the fixed navbar (single scrollable row). */
export function ExamHubNav() {
    const pathname = usePathname();
    const path = normalizePathname(pathname);

    return (
        <div className="container mx-auto flex h-full min-h-0 min-w-0 items-center px-4">
            <nav
                className={`flex min-h-0 min-w-0 w-full flex-nowrap gap-2 ${scrollHide}`}
                aria-label="Exam preparation"
            >
                {LINKS.map(({ href, label }) => {
                    const active = path === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`shrink-0 whitespace-nowrap rounded-full border px-3 py-1 text-sm font-medium transition-colors ${
                                active
                                    ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-400'
                                    : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                            }`}
                        >
                            {label}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
