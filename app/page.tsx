import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import Gallery from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <section id="gallery" className="bg-[#111] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
              Gallery
            </h2>
            <p className="text-muted-foreground/80 mb-10 max-w-2xl">
              A peek at our recent work. We’ll wire this up to your Facebook photos after you hand me the links.
            </p>
            <Gallery />
          </div>
        </div>
        </section>
      <Reviews />
      <Contact />
      <Footer />
    </main>
  )
}
