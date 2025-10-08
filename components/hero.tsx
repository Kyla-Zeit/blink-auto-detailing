import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Award } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Awards Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-in">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">3x Diamond Award Winner</span>
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight animate-fade-in-up"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Where Every Detail
            <br />
            <span className="text-primary">Meets Excellence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty animate-fade-in-up animation-delay-200">
            Proudly serving Niagara with premium auto detailing services. Specializing in luxury vehicles and premium
            Graphene coating.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 text-yellow-400 fill-yellow-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">40+ Five-Star Google Reviews</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base px-8 h-12"
              >
                Book Your Detail
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold text-base px-8 h-12 border-primary/30 hover:bg-primary/10 bg-transparent"
              >
                View Services
              </Button>
            </a>
          </div>

          {/* Location */}
          <p className="mt-12 text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
            181 South Service Road West, Unit 2, Grimsby, ON L3M 4H6
          </p>
        </div>
      </div>
    </section>
  )
}
