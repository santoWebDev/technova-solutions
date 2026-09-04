import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading
          number="01"
          title="We turn complicated technology into useful experiences."
          description="Our work sits at the intersection of product thinking, engineering and design."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-[#0b1220] p-8 text-white md:col-span-2">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
              Our mission
            </p>

            <h3 className="mt-20 max-w-2xl text-3xl font-bold leading-tight md:text-5xl">
              Make technology feel less complicated and more human.
            </h3>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
              Our vision
            </p>

            <p className="mt-10 text-xl font-semibold leading-8">
              Build digital products that remain valuable long after launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}