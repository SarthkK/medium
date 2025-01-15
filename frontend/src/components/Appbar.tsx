import { Avatar } from "./BlogCard";

export function Appbar() {
  return (
    <div className="border-b flex justify-between px-10 py-4 items-center">
      <p>Blogs</p>
      <div>
        <Avatar name="Sarthk" size="big" />
      </div>
    </div>
  );
}
