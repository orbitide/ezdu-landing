import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({className, ...props}: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "w-full px-4 py-3 bg-zinc-900/80 border border-zinc-800 rounded-lg text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-600/50 focus:border-emerald-600/50 transition-all resize-none",
                className
            )}
            {...props}
        />
    )
}

export { Textarea }
