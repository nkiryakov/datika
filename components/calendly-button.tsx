"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

interface CalendlyButtonProps {
  text: string
  showArrow?: boolean
  className?: string
}

// Add TypeScript interface for the Calendly global object
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
    }
  }
}

export function CalendlyButton({ text, showArrow = true, className = "" }: CalendlyButtonProps) {
  const [isCalendlyReady, setIsCalendlyReady] = useState(false)

  useEffect(() => {
    // Check if Calendly is loaded
    const checkCalendly = () => {
      if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
        setIsCalendlyReady(true)
        return true
      }
      return false
    }

    // If Calendly is already loaded
    if (checkCalendly()) return

    // If not loaded yet, set up a listener for when it loads
    const handleCalendlyLoaded = () => {
      checkCalendly()
    }

    document.addEventListener("calendly:ready", handleCalendlyLoaded)

    // Also set a timeout as a fallback
    const timeoutId = setTimeout(() => {
      checkCalendly()
    }, 2000)

    return () => {
      document.removeEventListener("calendly:ready", handleCalendlyLoaded)
      clearTimeout(timeoutId)
    }
  }, [])

  const openCalendly = () => {
    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/nikola-kiryakov",
      })
    } else {
      console.error("Calendly is not loaded properly")
      // Fallback - open Calendly in a new tab
      window.open("https://calendly.com/nikola-kiryakov", "_blank")
    }
  }

  return (
    <button
      onClick={openCalendly}
      className={`inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-8 text-lg font-medium text-white shadow transition-colors hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-zinc-900 ${className}`}
    >
      {text || "Schedule a Meeting"}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  )
}

