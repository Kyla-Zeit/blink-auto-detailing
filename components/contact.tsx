// components/contact.tsx
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative bg-[#111] text-white py-24 md:py-32">
      {/* soft glow (very subtle over black) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ready to Experience <span className="text-white/80">Excellence?</span>
            </h2>
            <p className="text-lg text-white/70 text-pretty max-w-2xl mx-auto">
              Call or text today to book your detail or request a personalized quote for your vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Phone */}
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-foreground">
                    <h3 className="font-semibold text-lg mb-2">Call or Text</h3>
                    <a
                      href="tel:2896825465"
                      className="text-base md:text-lg hover:text-foreground/80 transition-colors"
                    >
                      (289) 682-5465
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Available for quotes and bookings</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-foreground">
                    <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                    <a
                      href="mailto:blinkautodetailing@gmail.com"
                      className="text-base md:text-lg hover:text-foreground/80 transition-colors break-all"
                    >
                      blinkautodetailing@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">We’ll respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-foreground">
                    <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                    <p>
                      181 South Service Road West, Unit 2
                      <br />
                      Grimsby, ON L3M 4H6
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">Proudly serving Niagara</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-foreground">
                    <h3 className="font-semibold text-lg mb-2">Hours</h3>
                    <p>By Appointment Only</p>
                    <p className="text-sm text-muted-foreground mt-2">Flexible scheduling available</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a href="tel:2896825465">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold text-lg px-12 h-14"
              >
                <Phone className="mr-2 h-5 w-5" />
                Book Your Detail Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
