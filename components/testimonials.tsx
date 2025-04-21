import Image from "next/image"
import { Quote } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Datika transformed our approach to marketing. Their data-driven insights helped us increase conversions by 45% in just three months.",
      author: "Sarah Johnson",
      title: "CMO, TechCorp",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Working with Datika has been a game-changer for our business. Their analytics solutions provided clarity and direction for our growth strategy.",
      author: "Michael Chen",
      title: "CEO, GrowthWave",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The team at Datika doesn't just provide data—they provide actionable insights that have directly impacted our bottom line.",
      author: "Emily Rodriguez",
      title: "Director of Digital, MediaPulse",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-zinc-800 px-3 py-1 text-sm text-zinc-300">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Trusted by Innovative Companies
            </h2>
            <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our clients have to say about working with Datika.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-zinc-800 border-zinc-700 text-white">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-purple-500 mb-4" />
                <p className="text-zinc-300">"{testimonial.quote}"</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg?height=80&width=80"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-zinc-400">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
