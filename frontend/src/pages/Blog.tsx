import FullBlog from "../components/FullBlog";
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { Appbar } from "../components/Appbar";
import FullBlogSkeleton from "../components/FullBlogSkeleton";

function Blog() {
  const { id } = useParams();

  const { loading, blog } = useBlog({ id });
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <FullBlogSkeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <FullBlog blog={blog} />
      </div>
    </div>
  );
}

export default Blog;
