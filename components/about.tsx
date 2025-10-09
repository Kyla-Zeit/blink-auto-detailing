import { Award, Star, Shield, Users } from "lucide-react"

const stats = [
  { icon: Star, value: "40+", label: "Five-Star Reviews" },
  { icon: Award, value: "3x", label: "Diamond Awards" },
  { icon: Shield, value: "100%", label: "Satisfaction Rate" },
  { icon: Users, value: "664+", label: "Followers" },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-balance"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Excellence in Every
                <span className="text-primary"> Detail</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  At Blink Auto Detailing, we've built our reputation on delivering exceptional results for luxury and
                  exotic vehicles throughout the Niagara region.
                </p>
                <p>
                  As a <span className="text-foreground font-semibold">3x Diamond Award Winner</span>, we specialize in
                  premium Graphene coating and meticulous detailing services that exceed expectations.
                </p>
                <p>
                  Our commitment to excellence has earned us over{" "}
                  <span className="text-foreground font-semibold">40 five-star Google reviews</span> from satisfied
                  clients who trust us with their most prized vehicles.
                </p>
              </div>

              <div className="mt-8 p-6 bg-card border border-border rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">Contact Us</p>
                <div className="space-y-2">
                  <p className="font-medium">
                    <a
                      href="mailto:blinkautodetailing@gmail.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      blinkautodetailing@gmail.com
                    </a>
                  </p>
                  <p className="font-medium">
                    {/* CHANGED: make phone number black/foreground for readability */}
                    <a
                      href="tel:2896825465"
                      className="text-foreground hover:text-foreground/80 transition-colors"
                    >
                      (289) 682-5465
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    181 South Service Road West, Unit 2<br />
                    Grimsby, ON L3M 4H6
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
