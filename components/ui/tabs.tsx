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
                "flex gap-2 bg-slate-800/50 p-1 rounded-lg border border-slate-700",
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
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                            : "text-gray-400 hover:text-white"
                    )}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}


export { Tabs }
