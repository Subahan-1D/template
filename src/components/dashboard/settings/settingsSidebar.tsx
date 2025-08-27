"use client"

import { cn } from "@/lib/utils"
import { ChevronRightIcon } from "lucide-react"

type SettingsSidebarProps = {
    activeSection: string;
    setActiveSection: (section: "basic" | "account") => void;
};

export function SettingsSidebar({ activeSection, setActiveSection }: SettingsSidebarProps) {
    const navItems: { id: "basic" | "account"; label: string }[] = [
        { id: "basic", label: "Basic" },
        { id: "account", label: "Account" },
    ]

    return (
        <div className="w-64 pr-8">
            <nav className="space-y-2">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={cn(
                            "flex items-center justify-between w-full px-4 py-3 rounded-lg text-left text-gray-700 font-medium transition-colors hover:bg-amber-400 hover:text-white cursor-pointer",
                            activeSection === item.id && "bg-v0-purple ml-4 text-white bg-amber-400 hover:bg-v0-purple",
                        )}
                    >
                        <span>{item.label}</span>
                        <ChevronRightIcon className={cn("h-5 w-5 text-gray-400", activeSection === item.id && "text-white")} />
                    </button>
                ))}
            </nav>
        </div>
    )
}
