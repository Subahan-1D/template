"use client"

import { BasicForm } from "./form/BasicFrom"
import { PasswordForm } from "./form/passwordFrom"




interface SettingsContentProps {
  activeSection: "basic" | "account" 
}

export function SettingsContent({ activeSection }: SettingsContentProps) {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
      {activeSection === "basic" && <BasicForm />}
      {activeSection === "account" && <PasswordForm />}
    </div>
  )
}
