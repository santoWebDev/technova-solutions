import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="section bg-[#0b1220] text-white">
      <div className="container">
        <SectionHeading
          number="04"
          title="What our partners say."
          description="Long-term relationships built through thoughtful technology."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-white/10 p-8"
            >
              <div className="text-4xl text-blue-500">“</div>

              <p className="mt-5 text-lg leading-8 text-white/80">
                {testimonial.quote}
              </p>

              <div className="mt-10 border-t border-white/10 pt-6">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="mt-1 text-sm text-white/40">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}