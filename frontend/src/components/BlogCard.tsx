import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 max-w-xl p-5 flex flex-col gap-2 min-w-screen-xl cursor-pointer">
        <div className="flex items-center">
          <Avatar name={authorName} />
          <p className="font-extralight pl-1">
            {authorName} ·{" "}
            <span className="font-thin text-slate-500">{publishedDate}</span>
          </p>
        </div>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-light text-slate-400">
          {content.length > 100 ? content.slice(0, 100) + "..." : content}
        </div>
        <div>
          <p className="text-slate-500 text-thin">
            {Math.ceil(content.length / 750)} minute(s) read
          </p>
        </div>
      </div>
    </Link>
  );
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  const sizeClasses =
    size === "small" ? "w-5 h-5 text-xs" : "w-10 h-10 text-lg";
  const textSize = size === "small" ? "" : "lg";
  return (
    <div
      className={`relative inline-flex items-center justify-center ${sizeClasses} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className={`${textSize} text-gray-600 dark:text-gray-300`}>
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
export default BlogCard;
