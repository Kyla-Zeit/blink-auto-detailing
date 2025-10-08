// components/footer.tsx
import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#111] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-white/80 hover:text-white transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a href="tel:2896825465" className="hover:text-white transition-colors">
                  (289) 682-5465
                </a>
              </li>
              <li>
                <a
                  href="mailto:blinkautodetailing@gmail.com"
                  className="hover:text-white transition-colors break-all"
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
                aria-label="Facebook"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/blinkautodetailing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:blinkautodetailing@gmail.com"
                aria-label="Email"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Blink Auto Detailing. All rights reserved. | 3x Diamond Award Winner
        </div>
      </div>
    </footer>
  )
}
