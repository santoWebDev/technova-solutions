export default function SectionHeading({ number, title, description }) {
  return (
    <div className="mb-14 grid gap-6 md:grid-cols-[120px_1fr]">
      
      <div className="text-sm font-semibold tracking-[0.2em] text-blue-600">
        {number}
      </div>

      <div>
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl">
          {title}
        </h2>

        {description && (
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            {description}
          </p>
        )}
      </div>

    </div>
  );
}