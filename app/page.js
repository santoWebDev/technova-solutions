import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/services/Services";
import BlogSection from "../components/blog/BlogSection";
import Testimonials from "../components/testimonials/Testimonials";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";
import FadeIn from "../components/ui/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <FadeIn>
          <About />
        </FadeIn>

        <FadeIn>
          <Services />
        </FadeIn>

        <FadeIn>
          <BlogSection />
        </FadeIn>

        <FadeIn>
          <Testimonials />
        </FadeIn>

        <FadeIn>
          <ContactForm />
        </FadeIn>
      </main>

      <Footer />
    </>
  );
}