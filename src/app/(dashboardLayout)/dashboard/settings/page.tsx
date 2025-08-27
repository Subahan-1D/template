"use client"
import { SettingsContent } from "@/components/dashboard/settings/settingsContent"
import { SettingsSidebar } from "@/components/dashboard/settings/settingsSidebar"
import { useState } from "react"


export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState<"basic" | "account">("basic")

  return (
    <div className="flex w-full max-w-6xl mx-auto py-8 px-4 md:px-6 lg:px-8">
      <SettingsSidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <SettingsContent activeSection={activeSection} />
    </div>
  )
}