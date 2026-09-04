import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <SectionHeading
          number="02"
          title="Capabilities designed around outcomes."
          description="From first idea to production, we combine strategy, design and engineering."
        />

        <div>
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}   