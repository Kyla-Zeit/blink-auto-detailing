// components/about.tsx
"use client"

import { Mail, Phone, MapPin, ShieldCheck, Trophy, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Title & Intro */}
        <div className="max-w-3xl">
          <h2
            className="
              font-bold leading-tight tracking-tight text-balance
              text-[clamp(2rem,7vw,3.25rem)]
            "
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Excellence in{" "}
            <span className="text-primary">Every Detail</span>
          </h2>

          <p className="mt-4 text-[clamp(1rem,2.8vw,1.125rem)] text-muted-foreground">
            At Blink Auto Detailing, we&apos;ve built our reputation on
            delivering exceptional results for luxury and exotic vehicles
            throughout the Niagara region.
          </p>

          <p className="mt-4 text-[clamp(1rem,2.8vw,1.125rem)] text-muted-foreground">
            As a <span className="font-semibold text-foreground">3x Diamond Award Winner</span>, we specialize in premium Graphene coating and meticulous
            detailing services that exceed expectations. Our commitment to excellence
            has earned us over <span className="font-semibold text-foreground">40 five-star Google reviews</span>.
          </p>
        </div>

        {/* Contact / Quick info */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:blinkautodetailing@gmail.com"
                    className="block font-semibold text-foreground break-all"
                  >
                    blinkautodetailing@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone — BLACK & readable */}
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call or Text</p>
                  <a
                    href="tel:2896825465"
                    className="block font-semibold text-foreground cursor-pointer"
                  >
                    (289) 682-5465
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-foreground">
                    181 South Service Road West, Unit 2
                    <br />
                    Grimsby, ON L3M 4H6
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">3x</p>
                    <p className="text-sm text-muted-foreground">Diamond Awards</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">100%</p>
                    <p className="text-sm text-muted-foreground">Satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">40+</p>
                    <p className="text-sm text-muted-foreground">5-Star Reviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">664+</p>
                    <p className="text-sm text-muted-foreground">Followers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
