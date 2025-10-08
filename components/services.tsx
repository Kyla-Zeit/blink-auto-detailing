"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Sparkles, Shield, Droplets, Car } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Premium Detailing",
    description:
      "Complete interior and exterior detailing that restores your vehicle to showroom condition.",
    features: ["Deep cleaning", "Paint correction", "Interior restoration", "Engine bay detailing"],
  },
  {
    icon: Shield,
    title: "Graphene Coating",
    description:
      "Advanced protection with premium Graphene coating technology for unmatched durability.",
    features: ["10H hardness", "Hydrophobic protection", "UV resistance", "5+ year warranty"],
  },
  {
    icon: Droplets,
    title: "Ceramic Coating",
    description:
      "Professional-grade ceramic coating for long-lasting shine and protection.",
    features: ["Scratch resistance", "Chemical protection", "Enhanced gloss", "Easy maintenance"],
  },
  {
    icon: Car,
    title: "Luxury Specialist",
    description:
      "Specialized care for high-end and exotic vehicles with meticulous attention to detail.",
    features: ["Brand expertise", "Premium products", "Custom solutions", "White glove service"],
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-[#111] text-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Premium Services for
            {/* Make second line readable gray */}
            <span className="block text-white/55">Discerning Owners</span>
          </h2>

          <p className="text-lg text-white/80 leading-relaxed text-pretty">
            From complete detailing to advanced protection, we offer comprehensive services
            tailored to your vehicle&apos;s needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-accent mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-white/70 mb-4">Call or text today for a personalized quote</p>
          <a
            href="tel:2896825465"
            className="text-xl font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            (289) 682-5465
          </a>
        </div>
      </div>
    </section>
  )
}
