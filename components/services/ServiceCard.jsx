import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  number,
  title,
  description,
}) {
  return (
    <article className="group border-t border-[var(--border)] py-8 transition-all hover:border-blue-600">
      <div className="grid gap-6 md:grid-cols-[80px_1fr_60px] md:items-center">

        <span className="text-sm font-semibold text-blue-600">
          {number}
        </span>

        <div>
          <h3 className="text-2xl font-bold tracking-tight text-[var(--foreground)] transition group-hover:text-blue-600 md:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-[var(--muted)]">
            {description}
          </p>
        </div>

        <div className="text-2xl text-[var(--foreground)] transition-transform group-hover:translate-x-2">
          <ArrowRight size={28} strokeWidth={2} />
        </div>

      </div>
    </article>
  );
}