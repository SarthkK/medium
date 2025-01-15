import { Appbar } from "../components/Appbar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map((blog, i) => {
            return (
              <BlogCard
                id={blog.id}
                title={blog.title}
                content={blog.content}
                publishedDate="2nd Feb 2024"
                authorName={blog.author.name || "Anonymous"}
              />
            );
          })}
          <BlogCard
            title="How an ugly single page website makes 5000$ a month without affiliate marketing"
            content="How an ugly single page website makes 5000$ a month without affiliate marketing How an ugly single page website makes 5000$ a month without affiliate marketing"
            publishedDate="2nd Feb 2024"
            authorName="Sarthk Kharwal"
          />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
