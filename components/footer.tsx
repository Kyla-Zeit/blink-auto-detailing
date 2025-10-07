// components/footer.tsx
import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";

// IMPORTANT: this file must exist at /public/logo-blink.dfc256cf.png
import blinkLogo from "@/public/logo-blink.dfc256cf.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand (black tile + white copy, matching your logo background) */}
            <div className="rounded-xl bg-[#1e1e1e] p-6 md:p-7 lg:p-8 shadow-sm">
              <Image
                src={blinkLogo}
                alt="Blink Auto Detailing"
                priority
                // static import provides intrinsic width/height; this just controls render size
                className="h-14 w-auto mb-4"
              />
              <p className="text-sm leading-relaxed text-white/85">
                Where every detail meets excellence. Proudly serving Niagara with premium auto detailing services.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Get in Touch</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="tel:2896825465" className="hover:text-foreground transition-colors">
                    (289) 682-5465
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:blinkautodetailing@gmail.com"
                    className="hover:text-foreground transition-colors break-all"
                  >
                    blinkautodetailing@gmail.com
                  </a>
                </li>
                <li className="pt-2">
                  181 South Service Road West, Unit 2
                  <br />
                  Grimsby, ON L3M 4H6
                </li>
              </ul>

              <div className="flex items-center gap-4 mt-4">
                <a
                  href="https://www.facebook.com/blinkautodetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/blinkautodetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:blinkautodetailing@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Blink Auto Detailing. All rights reserved. | 3x Diamond Award Winner
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
