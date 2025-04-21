"use client"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function OgImageGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [generationStatus, setGenerationStatus] = useState<string>("")
  const [downloadLinks, setDownloadLinks] = useState<{ og: string; twitter: string }>({ og: "", twitter: "" })

  const generateImages = () => {
    const canvas = canvasRef.current
    if (!canvas) {
      setGenerationStatus("Canvas not available")
      return
    }

    const ctx = canvas.getContext("2d")
    if (!ctx) {
      setGenerationStatus("Canvas context not available")
      return
    }

    setGenerationStatus("Generating OG image...")

    // Set canvas dimensions for OG image
    canvas.width = 1200
    canvas.height = 630

    // Draw background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#0f0f0f")
    gradient.addColorStop(1, "#121212")
    ctx.fillStyle = gradient
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
    ctx.font = "bold 80px Arial, sans-serif"
    ctx.fillText("DATIKA", logoX + logoWidth + 60, logoY + logoHeight / 2 + 20)

    // Draw tagline
    ctx.fillStyle = "#A0A0A0"
    ctx.font = "32px Arial, sans-serif"
    ctx.fillText("Data Analytics & Digital Advertising", logoX + logoWidth + 60, logoY + logoHeight / 2 + 80)

    // Export as PNG
    try {
      const ogDataUrl = canvas.toDataURL("image/png")
      setGenerationStatus("OG Image generated successfully")

      // Store the OG image URL for download
      setDownloadLinks((prev) => ({ ...prev, og: ogDataUrl }))

      // Now generate Twitter image
      canvas.height = 600 // Twitter image height

      // Redraw everything for Twitter image
      // Background
      ctx.fillStyle = gradient
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
      ctx.font = "bold 80px Arial, sans-serif"
      ctx.fillText("DATIKA", logoX + logoWidth + 60, twitterLogoY + logoHeight / 2 + 20)

      // Draw tagline
      ctx.fillStyle = "#A0A0A0"
      ctx.font = "32px Arial, sans-serif"
      ctx.fillText("Transform Your Data into Insights", logoX + logoWidth + 60, twitterLogoY + logoHeight / 2 + 80)

      // Export Twitter image
      const twitterDataUrl = canvas.toDataURL("image/png")
      setGenerationStatus("Both images generated successfully")

      // Store the Twitter image URL for download
      setDownloadLinks((prev) => ({ ...prev, twitter: twitterDataUrl }))
    } catch (error) {
      setGenerationStatus(`Error generating images: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  const downloadImage = (dataUrl: string, filename: string) => {
    const link = document.createElement("a")
    link.href = dataUrl
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">OG Image Generator</h1>
      <p className="mb-4">This tool generates OpenGraph images for the Datika website.</p>
      <p className="mb-4">Click the button below to generate and download the images.</p>

      <Button onClick={generateImages} className="mb-4">
        Generate Images
      </Button>

      {generationStatus && (
        <div className="mb-4 p-4 bg-zinc-800 rounded-md">
          <p>{generationStatus}</p>
        </div>
      )}

      {downloadLinks.og && (
        <div className="flex gap-4 mb-4">
          <Button onClick={() => downloadImage(downloadLinks.og, "og-image.png")}>Download OG Image (1200×630)</Button>
          <Button onClick={() => downloadImage(downloadLinks.twitter, "twitter-image.png")}>
            Download Twitter Image (1200×600)
          </Button>
        </div>
      )}

      <div className="mt-8">
        <canvas ref={canvasRef} className="border border-gray-700 max-w-full" />
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">Important Notes:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            After generating, download both images and place them in the <code>public</code> folder of your project.
          </li>
          <li>
            Make sure the files are named <code>og-image.png</code> and <code>twitter-image.png</code>.
          </li>
          <li>The OG image should be 1200×630 pixels and the Twitter image should be 1200×600 pixels.</li>
          <li>
            Verify that the images are accessible at <code>https://datika.ca/og-image.png</code> and{" "}
            <code>https://datika.ca/twitter-image.png</code>.
          </li>
        </ul>
      </div>
    </div>
  )
}
