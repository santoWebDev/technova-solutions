import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "../../../data/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;

  const blog = blogs.find((item) => item.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main>
      <article className="container max-w-4xl py-24">
        <Link
          href="/#blog"
          className="text-sm font-semibold text-blue-600"
        >
          ← Back to insights
        </Link>

        <div className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            {blog.category}
          </p>

          <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
            {blog.title}
          </h1>

          <p className="mt-6 text-xl leading-8 text-gray-500">
            {blog.description}
          </p>

          <div className="relative mt-12 aspect-video overflow-hidden rounded-3xl">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="mt-12 text-lg leading-9 text-gray-700">
            <p>{blog.content}</p>
          </div>
        </div>
      </article>
    </main>
  );
}