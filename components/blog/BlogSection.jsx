import SectionHeading from "../ui/SectionHeading";
import BlogCard from "./BlogCard";
import { blogs } from "../../data/blogs";

export default function BlogSection() {
  return (
    <section id="blog" className="section">
      <div className="container">
        <SectionHeading
          number="03"
          title="Ideas for building what comes next."
          description="Perspectives on technology, design, engineering and digital growth."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}