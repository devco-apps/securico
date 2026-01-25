import Hero from "@/components/Home/Hero";
import Brands from "@/components/Home/Brands";
import About from "@/components/Home/About";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Home/Pricing";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Home/Testimonial";

export default function Home() {
  return (
    <main className="relative min-h-screen select-none overflow-hidden text-white antialiased">
      <Hero />
      <About />
      <Brands />
      <FAQ />
      <Pricing />
      <Blog />
    </main>
  );
}
