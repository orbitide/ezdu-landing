'use client';

import type { LucideProps } from 'lucide-react';
import {
    BarChart3,
    Bell,
    BookOpen,
    Bot,
    Calendar,
    FileText,
    FlaskConical,
    Globe,
    GraduationCap,
    Headphones,
    Landmark,
    Layers,
    Library,
    Pin,
    Puzzle,
    Repeat,
    Timer,
    Trophy,
} from 'lucide-react';

export const EXAM_ICONS = {
    graduationCap: GraduationCap,
    landmark: Landmark,
    globe: Globe,
    bookOpen: BookOpen,
    fileText: FileText,
    flaskConical: FlaskConical,
    calendar: Calendar,
    barChart3: BarChart3,
    bot: Bot,
    trophy: Trophy,
    headphones: Headphones,
    library: Library,
    repeat: Repeat,
    puzzle: Puzzle,
    pin: Pin,
    bell: Bell,
    layers: Layers,
    timer: Timer,
} as const;

export type ExamIconName = keyof typeof EXAM_ICONS;

export function ExamIcon({ name, ...props }: { name: ExamIconName } & LucideProps) {
    const Cmp = EXAM_ICONS[name];
    return <Cmp strokeWidth={2} {...props} />;
}
