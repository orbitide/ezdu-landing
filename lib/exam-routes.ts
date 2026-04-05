export const EXAM_PATHS = ['/ssc', '/hsc', '/bcs', '/ielts', '/vocabulary'] as const;

const EXAM_SET = new Set<string>(EXAM_PATHS);

export function normalizePathname(pathname: string | null): string {
    if (!pathname) return '';
    let p = pathname.split('?')[0]?.split('#')[0] ?? '';
    if (p.length > 1 && p.endsWith('/')) {
        p = p.slice(0, -1);
    }
    return p;
}

export function isExamPath(pathname: string | null): boolean {
    return EXAM_SET.has(normalizePathname(pathname));
}
