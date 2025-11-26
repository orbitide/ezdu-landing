import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({className, ...props}: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }
