import type { ReactNode } from 'react';

/** Route group `(exams)` does not change URLs. Inline padding avoids Tailwind/arbitrary edge cases. */
export default function ExamsLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-w-0 bg-black" style={{ paddingTop: 'var(--ez-marketing-header-exam)' }}>
            {children}
        </div>
    );
}
