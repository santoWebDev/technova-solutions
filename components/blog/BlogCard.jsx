import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-black/10 bg-white">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-7">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-gray-400">
          <span>{blog.category}</span>
          <span>{blog.date}</span>
        </div>

        <h3 className="mt-5 text-2xl font-bold tracking-tight">
          {blog.title}
        </h3>

        <p className="mt-4 leading-7 text-gray-500">
          {blog.description}
        </p>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-7 inline-block font-semibold text-blue-600"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}