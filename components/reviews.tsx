import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "Absolutely phenomenal work on my Porsche 911. The Graphene coating is incredible - water just beads right off. Best detailing service in Niagara, hands down.",
    vehicle: "Porsche 911",
  },
  {
    name: "Sarah L.",
    rating: 5,
    text: "I was blown away by the attention to detail. My Mercedes looks better than the day I bought it. The team at Blink truly cares about their craft.",
    vehicle: "Mercedes-Benz S-Class",
  },
  {
    name: "David K.",
    rating: 5,
    text: "Professional, meticulous, and worth every penny. They treated my BMW like it was their own. The ceramic coating has held up beautifully for over a year.",
    vehicle: "BMW M5",
  },
  {
    name: "Jennifer M.",
    rating: 5,
    text: "Outstanding service from start to finish. The interior detailing was incredible - removed stains I thought were permanent. Highly recommend!",
    vehicle: "Range Rover Sport",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trusted by Luxury
            <span className="text-primary"> Vehicle Owners</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Don't just take our word for it - see what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary/20 mb-3" />
                <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.vehicle}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">Verified Client</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-2">See all our reviews on Google</p>
          <a
            href="https://www.google.com/search?q=blink+auto+detailing+grimsby"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <Star className="h-4 w-4 fill-accent text-accent" />
            40+ Five-Star Google Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
