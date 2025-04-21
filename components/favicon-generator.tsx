"use client"

import { useEffect, useRef } from "react"

export function FaviconGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Generate Apple Touch Icon (180x180)
    canvas.width = 180
    canvas.height = 180

    // Draw background
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Calculate logo dimensions
    const padding = 20
    const logoSize = canvas.width - padding * 2

    // Create gradient for logo
    const logoGradient = ctx.createLinearGradient(padding, padding, padding + logoSize, padding + logoSize)
    logoGradient.addColorStop(0, "#9333EA")
    logoGradient.addColorStop(0.5, "#3B82F6")
    logoGradient.addColorStop(1, "#06B6D4")

    // Draw outer shape (D)
    ctx.fillStyle = logoGradient
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding + logoSize, padding)
    ctx.arc(padding + logoSize - logoSize / 2, padding + logoSize / 2, logoSize / 2, -Math.PI / 2, Math.PI / 2)
    ctx.lineTo(padding, padding + logoSize)
    ctx.closePath()
    ctx.fill()

    // Draw inner shape (negative space in D)
    ctx.fillStyle = "#000000"
    ctx.beginPath()
    ctx.moveTo(padding + logoSize - logoSize / 2, padding + logoSize / 4)
    ctx.lineTo(padding + logoSize - logoSize / 2 - logoSize / 4, padding + logoSize / 4)
    ctx.lineTo(padding + logoSize - logoSize / 2 - logoSize / 4, padding + logoSize - logoSize / 4)
    ctx.lineTo(padding + logoSize - logoSize / 2, padding + logoSize - logoSize / 4)
    ctx.arc(padding + logoSize - logoSize / 2, padding + logoSize / 2, logoSize / 4, Math.PI / 2, -Math.PI / 2, true)
    ctx.closePath()
    ctx.fill()

    // Export as PNG
    const appleIconDataUrl = canvas.toDataURL("image/png")
    console.log("Apple Touch Icon generated successfully")

    // Create download link
    const appleIconLink = document.createElement("a")
    appleIconLink.href = appleIconDataUrl
    appleIconLink.download = "apple-touch-icon.png"
    document.body.appendChild(appleIconLink)
    appleIconLink.click()
    document.body.removeChild(appleIconLink)

    // Generate favicon.ico (32x32)
    canvas.width = 32
    canvas.height = 32

    // Draw background
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Calculate logo dimensions
    const faviconPadding = 2
    const faviconLogoSize = canvas.width - faviconPadding * 2

    // Create gradient for logo
    const faviconGradient = ctx.createLinearGradient(
      faviconPadding,
      faviconPadding,
      faviconPadding + faviconLogoSize,
      faviconPadding + faviconLogoSize,
    )
    faviconGradient.addColorStop(0, "#9333EA")
    faviconGradient.addColorStop(0.5, "#3B82F6")
    faviconGradient.addColorStop(1, "#06B6D4")

    // Draw outer shape (D)
    ctx.fillStyle = faviconGradient
    ctx.beginPath()
    ctx.moveTo(faviconPadding, faviconPadding)
    ctx.lineTo(faviconPadding + faviconLogoSize, faviconPadding)
    ctx.arc(
      faviconPadding + faviconLogoSize - faviconLogoSize / 2,
      faviconPadding + faviconLogoSize / 2,
      faviconLogoSize / 2,
      -Math.PI / 2,
      Math.PI / 2,
    )
    ctx.lineTo(faviconPadding, faviconPadding + faviconLogoSize)
    ctx.closePath()
    ctx.fill()

    // Draw inner shape (negative space in D)
    ctx.fillStyle = "#000000"
    ctx.beginPath()
    ctx.moveTo(faviconPadding + faviconLogoSize - faviconLogoSize / 2, faviconPadding + faviconLogoSize / 4)
    ctx.lineTo(
      faviconPadding + faviconLogoSize - faviconLogoSize / 2 - faviconLogoSize / 4,
      faviconPadding + faviconLogoSize / 4,
    )
    ctx.lineTo(
      faviconPadding + faviconLogoSize - faviconLogoSize / 2 - faviconLogoSize / 4,
      faviconPadding + faviconLogoSize - faviconLogoSize / 4,
    )
    ctx.lineTo(
      faviconPadding + faviconLogoSize - faviconLogoSize / 2,
      faviconPadding + faviconLogoSize - faviconLogoSize / 4,
    )
    ctx.arc(
      faviconPadding + faviconLogoSize - faviconLogoSize / 2,
      faviconPadding + faviconLogoSize / 2,
      faviconLogoSize / 4,
      Math.PI / 2,
      -Math.PI / 2,
      true,
    )
    ctx.closePath()
    ctx.fill()

    // Export as PNG
    const faviconDataUrl = canvas.toDataURL("image/png")
    console.log("Favicon generated successfully")

    // Create download link
    const faviconLink = document.createElement("a")
    faviconLink.href = faviconDataUrl
    faviconLink.download = "favicon-32x32.png"
    document.body.appendChild(faviconLink)
    faviconLink.click()
    document.body.removeChild(faviconLink)

    // Generate favicon 16x16
    canvas.width = 16
    canvas.height = 16

    // Draw background
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Calculate logo dimensions
    const smallFaviconPadding = 1
    const smallFaviconLogoSize = canvas.width - smallFaviconPadding * 2

    // Create gradient for logo
    const smallFaviconGradient = ctx.createLinearGradient(
      smallFaviconPadding,
      smallFaviconPadding,
      smallFaviconPadding + smallFaviconLogoSize,
      smallFaviconPadding + smallFaviconLogoSize,
    )
    smallFaviconGradient.addColorStop(0, "#9333EA")
    smallFaviconGradient.addColorStop(0.5, "#3B82F6")
    smallFaviconGradient.addColorStop(1, "#06B6D4")

    // Draw outer shape (D)
    ctx.fillStyle = smallFaviconGradient
    ctx.beginPath()
    ctx.moveTo(smallFaviconPadding, smallFaviconPadding)
    ctx.lineTo(smallFaviconPadding + smallFaviconLogoSize, smallFaviconPadding)
    ctx.arc(
      smallFaviconPadding + smallFaviconLogoSize - smallFaviconLogoSize / 2,
      smallFaviconPadding + smallFaviconLogoSize / 2,
      smallFaviconLogoSize / 2,
      -Math.PI / 2,
      Math.PI / 2,
    )
    ctx.lineTo(smallFaviconPadding, smallFaviconPadding + smallFaviconLogoSize)
    ctx.closePath()
    ctx.fill()

    // Export as PNG
    const smallFaviconDataUrl = canvas.toDataURL("image/png")
    console.log("Small favicon generated successfully")

    // Create download link
    const smallFaviconLink = document.createElement("a")
    smallFaviconLink.href = smallFaviconDataUrl
    smallFaviconLink.download = "favicon-16x16.png"
    document.body.appendChild(smallFaviconLink)
    smallFaviconLink.click()
    document.body.removeChild(smallFaviconLink)
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Favicon Generator</h1>
      <p className="mb-4">This tool generates favicon files for the Datika website.</p>
      <p className="mb-4">Click the button below to generate and download the favicon files.</p>
      <div className="mt-8">
        <canvas ref={canvasRef} className="border border-gray-700" />
      </div>
    </div>
  )
}
