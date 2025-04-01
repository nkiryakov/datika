"use client"

import { useEffect, useState, useRef } from "react"

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      setScrollY(window.scrollY)
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Cross pattern background */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('/cross-bg.svg')`,
          backgroundSize: "50px 50px",
          transform: `translateY(${scrollY * 0.6}px)`,
          opacity: 0.15,
        }}
      />

      {/* Gradient layers */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-purple-900/30 to-transparent"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.5,
        }}
      />

      {/* Moving circles */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"
        style={{
          transform: `translate(${scrollY * -0.4}px, ${scrollY * 0.2}px)`,
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl"
        style={{
          transform: `translate(${scrollY * 0.4}px, ${scrollY * -0.3}px)`,
        }}
      />

      {/* Additional circles for more movement */}
      <div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-cyan-600/10 blur-3xl"
        style={{
          transform: `translate(${scrollY * -0.5}px, ${scrollY * -0.2}px)`,
        }}
      />

      <div
        className="absolute bottom-1/3 left-1/2 w-80 h-80 rounded-full bg-green-600/10 blur-3xl"
        style={{
          transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.4}px)`,
        }}
      />

      {/* Diagonal gradient */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-900/20 to-transparent"
        style={{
          transform: `translateY(${scrollY * -0.25}px) translateX(${scrollY * 0.25}px)`,
          opacity: 0.4,
        }}
      />

      {/* Floating elements */}
      <div
        className="absolute top-[30%] left-[15%] w-8 h-8 bg-purple-500/30 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * -0.7}px)`,
        }}
      />
      <div
        className="absolute top-[40%] right-[20%] w-6 h-6 bg-blue-500/30 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * -0.8}px)`,
        }}
      />
      <div
        className="absolute top-[60%] left-[30%] w-10 h-10 bg-cyan-500/30 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * -0.6}px)`,
        }}
      />
      <div
        className="absolute top-[70%] right-[35%] w-12 h-12 bg-indigo-500/30 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * -0.9}px)`,
        }}
      />
    </div>
  )
}

