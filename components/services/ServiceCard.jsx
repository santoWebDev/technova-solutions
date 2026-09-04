export default function ServiceCard({
  number,
  title,
  description,
}) {
  return (
    <article className="group border-t border-black/15 py-8 transition-all hover:border-blue-600">
      <div className="grid gap-6 md:grid-cols-[80px_1fr_60px] md:items-center">
        
        <span className="text-sm font-semibold text-blue-600">
          {number}
        </span>

        <div>
          <h3 className="text-2xl font-bold tracking-tight transition group-hover:text-blue-600 md:text-3xl">
            {title}
          </h3>

          <p className="mt-3 max-w-xl leading-7 text-gray-500">
            {description}
          </p>
        </div>

        <div className="text-2xl transition-transform group-hover:translate-x-2">
          →
        </div>
      </div>
    </article>
  );
}