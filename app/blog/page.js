import BlogCard from "../../components/blog/BlogCard";
import { blogs } from "../../data/blogs";

export default function BlogPage() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            TechNova Insights
          </p>

          <h1 className="mt-6 max-w-4xl text-6xl font-black tracking-tight md:text-8xl">
            Ideas for the digital world.
          </h1>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}