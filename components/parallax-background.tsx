"use client"

import { useEffect, useState, useRef } from "react"

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)
  const animationRef = useRef<number | null>(null)

  // Handle scroll events
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  // Setup scroll listener with requestAnimationFrame for performance
  useEffect(() => {
    // Initial setup
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      // Cleanup
      window.removeEventListener("scroll", handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Calculate dynamic grid size based on scroll position
  const gridSize = Math.max(20, 30 - scrollY * 0.01) // Grid gets smaller as you scroll (min size 20px)

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Main grid background - changes size based on scroll */}
      <div
        className="absolute inset-0 w-full h-full opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(147, 51, 234, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(147, 51, 234, 0.1) 1px, transparent 1px)",
          backgroundSize: `${gridSize}px ${gridSize}px`,
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Vertical grid lines with different color and scroll speed */}
      <div
        className="absolute inset-0 w-full h-full opacity-10"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px)",
          backgroundSize: `${gridSize * 4}px ${gridSize * 4}px`,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Horizontal grid lines with different color and scroll speed */}
      <div
        className="absolute inset-0 w-full h-full opacity-10"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(6, 182, 212, 0.15) 1px, transparent 1px)",
          backgroundSize: `${gridSize * 4}px ${gridSize * 4}px`,
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900" />

      {/* Radial gradients for a futuristic look */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.1),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(147,51,234,0.1),transparent_35%)]" />

      {/* Animated blurred orbs that move at different rates */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-3xl"
        style={{
          left: "20%",
          top: "30%",
          transform: `translate(${scrollY * -0.1}px, ${Math.sin(scrollY * 0.002) * 50}px)`,
        }}
      />

      <div
        className="absolute w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-3xl"
        style={{
          right: "25%",
          top: "20%",
          transform: `translate(${scrollY * 0.15}px, ${Math.cos(scrollY * 0.003) * 30}px)`,
        }}
      />

      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-3xl"
        style={{
          left: "40%",
          bottom: "10%",
          transform: `translate(${Math.sin(scrollY * 0.001) * 40}px, ${scrollY * -0.05}px)`,
        }}
      />

      {/* Data points - small glowing dots that move at different speeds */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-purple-400"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            opacity: 0.2 + Math.random() * 0.3,
            transform: `translateY(${scrollY * (0.1 + Math.random() * 0.3)}px)`,
            boxShadow: "0 0 4px 1px rgba(147, 51, 234, 0.5)",
          }}
        />
      ))}

      {[...Array(15)].map((_, i) => (
        <div
          key={i + 20}
          className="absolute w-1 h-1 rounded-full bg-blue-400"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            opacity: 0.1 + Math.random() * 0.3,
            transform: `translateY(${scrollY * (0.15 + Math.random() * 0.2)}px)`,
            boxShadow: "0 0 4px 1px rgba(59, 130, 246, 0.5)",
          }}
        />
      ))}

      {[...Array(10)].map((_, i) => (
        <div
          key={i + 35}
          className="absolute w-1 h-1 rounded-full bg-cyan-400"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            opacity: 0.1 + Math.random() * 0.2,
            transform: `translateY(${scrollY * (0.2 + Math.random() * 0.15)}px)`,
            boxShadow: "0 0 4px 1px rgba(6, 182, 212, 0.5)",
          }}
        />
      ))}

      {/* Data streams - animated lines connecting points */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <line x1="20%" y1="30%" x2="40%" y2="70%" stroke="url(#purpleBlueGradient)" strokeWidth="1" />
        <line x1="40%" y1="70%" x2="70%" y2="45%" stroke="url(#blueCyanGradient)" strokeWidth="1" />
        <line x1="70%" y1="45%" x2="30%" y2="20%" stroke="url(#cyanPurpleGradient)" strokeWidth="1" />

        <defs>
          <linearGradient id="purpleBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="blueCyanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="cyanPurpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Overlay to blend everything together */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}

