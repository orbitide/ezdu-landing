"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface CustomTabsProps {
    tabs: string[];
    activeTab: string;
    setActiveTab: (value: string) => void;
    className?: string;
}

function Tabs({tabs, activeTab, setActiveTab, className}: CustomTabsProps) {
    return (
        <div
            className={cn(
                "flex gap-2 bg-zinc-900/80 p-1 rounded-lg border border-zinc-800",
                className
            )}
        >
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn(
                        "flex-1 px-6 py-2 rounded-md font-medium transition-all",
                        activeTab === tab
                            ? "bg-emerald-600 text-white"
                            : "text-zinc-400 hover:text-zinc-100"
                    )}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}


export { Tabs }
