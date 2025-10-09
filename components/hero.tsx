"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"
import AwardBadge from "@/components/award-badge"

export function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden pt-28 md:pt-32">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Decorative blurred shapes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl md:max-w-5xl mx-auto text-center">

          {/* Animated Award Badge */}
          <div className="mb-6 md:mb-8 flex justify-center animate-fade-in">
            <AwardBadge />
          </div>

          {/* Main Headline */}
          <h1
            className="
              font-bold leading-tight tracking-tight text-balance animate-fade-in-up
              text-[clamp(2.2rem,8vw,4.5rem)] md:text-[clamp(3.5rem,6vw,6rem)]
            "
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where Every Detail
            <br className="hidden md:block" />
            <span className="text-primary"> Meets Excellence</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 md:mt-6 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            Proudly serving Niagara with premium auto detailing services. Specializing in luxury vehicles and premium
            Graphene coating.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mt-6 md:mt-8 mb-8 md:mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-xs md:text-sm font-medium text-foreground">
              40+ Five-Star Google Reviews
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 md:gap-4 animate-fade-in-up animation-delay-400">
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base md:text-lg h-12 px-6 md:px-8"
              >
                Book Your Detail
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold text-base md:text-lg h-12 px-6 md:px-8 border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                View Services
              </Button>
            </a>
          </div>

          {/* Location */}
          <p className="mt-8 md:mt-12 text-xs md:text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
            181 South Service Road West, Unit 2, Grimsby, ON L3M 4H6
          </p>
        </div>
      </div>
    </section>
  )
}
