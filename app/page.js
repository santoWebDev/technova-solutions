import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Services from "../components/services/Services";
import BlogSection from "../components/blog/BlogSection";
import Testimonials from "../components/testimonials/Testimonials";
import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <BlogSection />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </>
  );
}