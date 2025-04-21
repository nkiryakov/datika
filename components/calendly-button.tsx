"use client"

import { ArrowRight } from "lucide-react"

interface CalendlyButtonProps {
  text: string
  showArrow?: boolean
  className?: string
}

export function CalendlyButton({ text, showArrow = true, className = "" }: CalendlyButtonProps) {
  return (
    <a
      href="https://calendly.com/nikola-kiryakov"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-500 px-8 text-lg font-medium text-white shadow transition-colors hover:from-purple-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-zinc-900 ${className}`}
    >
      {text || "Schedule a Meeting"}
      {showArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </a>
  )
}
