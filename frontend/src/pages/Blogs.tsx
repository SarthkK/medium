import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import BlogSkeleton from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div className="">
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog, i) => {
            return (
              <BlogCard
                key={i}
                id={blog.id}
                title={blog.title}
                content={blog.content}
                publishedDate="2nd Feb 2024"
                authorName={blog.author.name || "Anonymous"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
