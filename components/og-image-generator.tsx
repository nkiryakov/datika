"use client"

import { useEffect, useRef } from "react"

export function OgImageGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 1200
    canvas.height = 630

    // Draw background
    ctx.fillStyle = "#0f0f0f"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid pattern
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 0.5

    // Vertical lines
    for (let x = 0; x <= canvas.width; x += 20) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }

    // Horizontal lines
    for (let y = 0; y <= canvas.height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Draw Datika logo
    const logoX = 300
    const logoY = 230
    const logoWidth = 240
    const logoHeight = 160

    // Create gradient for logo
    const logoGradient = ctx.createLinearGradient(logoX, logoY, logoX + logoWidth, logoY + logoHeight)
    logoGradient.addColorStop(0, "#9333EA")
    logoGradient.addColorStop(0.5, "#3B82F6")
    logoGradient.addColorStop(1, "#06B6D4")

    // Draw outer shape
    ctx.fillStyle = logoGradient
    ctx.beginPath()
    ctx.moveTo(logoX, logoY)
    ctx.lineTo(logoX + logoWidth, logoY)
    ctx.arc(logoX + logoWidth - logoHeight / 2, logoY + logoHeight / 2, logoHeight / 2, -Math.PI / 2, Math.PI / 2)
    ctx.lineTo(logoX, logoY + logoHeight)
    ctx.closePath()
    ctx.fill()

    // Draw inner shape
    ctx.fillStyle = "#000000"
    ctx.beginPath()
    ctx.moveTo(logoX + logoWidth - logoHeight / 2, logoY + logoHeight / 4)
    ctx.lineTo(logoX + logoWidth - logoHeight / 2 - logoHeight / 4, logoY + logoHeight / 4)
    ctx.lineTo(logoX + logoWidth - logoHeight / 2 - logoHeight / 4, logoY + logoHeight - logoHeight / 4)
    ctx.lineTo(logoX + logoWidth - logoHeight / 2, logoY + logoHeight - logoHeight / 4)
    ctx.arc(logoX + logoWidth - logoHeight / 2, logoY + logoHeight / 2, logoHeight / 4, Math.PI / 2, -Math.PI / 2, true)
    ctx.closePath()
    ctx.fill()

    // Draw text
    ctx.fillStyle = "#FFFFFF"
    ctx.font = "bold 80px Arial"
    ctx.fillText("DATIKA", logoX + logoWidth + 60, logoY + logoHeight / 2 + 20)

    // Draw tagline
    ctx.fillStyle = "#A0A0A0"
    ctx.font = "32px Arial"
    ctx.fillText("Data Analytics & Digital Advertising", logoX + logoWidth + 60, logoY + logoHeight / 2 + 80)

    // Export as PNG
    const dataUrl = canvas.toDataURL("image/png")
    console.log("OG Image generated successfully")

    // Create download link
    const link = document.createElement("a")
    link.href = dataUrl
    link.download = "og-image.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Create Twitter image
    canvas.height = 600

    // Redraw everything for Twitter image
    // Background
    ctx.fillStyle = "#0f0f0f"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Grid pattern
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 0.5

    // Vertical lines
    for (let x = 0; x <= canvas.width; x += 20) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }

    // Horizontal lines
    for (let y = 0; y <= canvas.height; y += 20) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Logo (slightly adjusted position)
    const twitterLogoY = 200

    // Draw outer shape
    ctx.fillStyle = logoGradient
    ctx.beginPath()
    ctx.moveTo(logoX, twitterLogoY)
    ctx.lineTo(logoX + logoWidth, twitterLogoY)
    ctx.arc(
      logoX + logoWidth - logoHeight / 2,
      twitterLogoY + logoHeight / 2,
      logoHeight / 2,
      -Math.PI / 2,
      Math.PI / 2,
    )
    ctx.lineTo(logoX, twitterLogoY + logoHeight)
    ctx.closePath()
    ctx.fill()

    // Draw inner shape
    ctx.fillStyle = "#000000"
    ctx.beginPath()
    ctx.moveTo(logoX + logoWidth - logoHeight / 2, twitterLogoY + logoHeight / 4)
    ctx.lineTo(logoX + logoWidth - logoHeight / 2 - logoHeight / 4, twitterLogoY + logoHeight / 4)
    ctx.lineTo(logoX + logoWidth - logoHeight / 2 - logoHeight / 4, twitterLogoY + logoHeight - logoHeight / 4)
    ctx.lineTo(logoX + logoWidth - logoHeight / 2, twitterLogoY + logoHeight - logoHeight / 4)
    ctx.arc(
      logoX + logoWidth - logoHeight / 2,
      twitterLogoY + logoHeight / 2,
      logoHeight / 4,
      Math.PI / 2,
      -Math.PI / 2,
      true,
    )
    ctx.closePath()
    ctx.fill()

    // Draw text
    ctx.fillStyle = "#FFFFFF"
    ctx.font = "bold 80px Arial"
    ctx.fillText("DATIKA", logoX + logoWidth + 60, twitterLogoY + logoHeight / 2 + 20)

    // Draw tagline
    ctx.fillStyle = "#A0A0A0"
    ctx.font = "32px Arial"
    ctx.fillText("Transform Your Data into Insights", logoX + logoWidth + 60, twitterLogoY + logoHeight / 2 + 80)

    // Export Twitter image
    const twitterDataUrl = canvas.toDataURL("image/png")
    console.log("Twitter Image generated successfully")

    // Create download link for Twitter image
    const twitterLink = document.createElement("a")
    twitterLink.href = twitterDataUrl
    twitterLink.download = "twitter-image.png"
    document.body.appendChild(twitterLink)
    twitterLink.click()
    document.body.removeChild(twitterLink)
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">OG Image Generator</h1>
      <p className="mb-4">This tool generates OpenGraph images for the Datika website.</p>
      <p className="mb-4">Click the button below to generate and download the images.</p>
      <div className="mt-8">
        <canvas ref={canvasRef} className="border border-gray-700" />
      </div>
    </div>
  )
}
