"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle({ variant = "default" }: { variant?: "default" | "minimal" }) {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en")
  }

  // Safe translation with fallback
  const buttonText = (() => {
    try {
      const text = t("nav.language")
      return text === "nav.language" ? (language === "en" ? "Français" : "English") : text
    } catch (error) {
      return language === "en" ? "Français" : "English"
    }
  })()

  if (variant === "minimal") {
    return (
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors"
      >
        <Globe className="h-4 w-4" />
        <span>{buttonText}</span>
      </button>
    )
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="border-zinc-700 text-white hover:bg-zinc-800"
    >
      <Globe className="h-4 w-4 mr-2" />
      {buttonText}
    </Button>
  )
}
