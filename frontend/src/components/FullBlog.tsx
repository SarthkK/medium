import { Blog } from "../hooks";
import { Avatar } from "./BlogCard";

function FullBlog({ blog }: { blog: Blog | undefined }) {
  if (blog === undefined) {
    blog = {
      id: "",
      title: "Error",
      content: "",
      author: {
        name: "Unknown",
      },
    };
  }
  return (
    <div className="grid grid-cols-4 max-w-screen-xl p-5 pt-12">
      <div className="col-span-3">
        <h1 className="text-6xl font-extrabold">{blog.title}</h1>
        <p className="text-slate-400 font-medium pt-4">
          Posted on August 24, 2023
        </p>
        <p className="text-slate-800 pt-4">{blog.content}</p>
      </div>
      <div className="col-span-1">
        <p className="font-semibold text-slate-600 text-lg">Author</p>
        <div className="flex items-center">
          <div className="min-w-10">
            <Avatar name={blog.author.name || "Anonymous"} size="big" />
          </div>
          <div className="flex flex-col justify-between gap-1 pt-2 pl-2">
            <p className="text-xl font-bold">
              {blog.author.name || "Anonymous"}
            </p>
            <p className="text-xs text-slate-400">
              Random catch phrase about author's ability to grab the user's
              attention
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlog;
