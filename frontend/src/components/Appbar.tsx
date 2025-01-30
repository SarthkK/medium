import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./BlogCard";
import { useGetDetails } from "../hooks";
import { useEffect, useRef } from "react";

export function Appbar() {
  const { name, email, catchphrase } = useGetDetails();
  const navigate = useNavigate();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [catchphrase]);
  return (
    <div className="border-b flex justify-between px-10 py-4 items-center">
      <Link to={"/blogs"} className="cursor-pointer">
        <p className="text-2xl">Blogs</p>
      </Link>
      <div className=" flex items-center">
        <Link to={"/publish"}>
          <button
            type="button"
            className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            New
          </button>
        </Link>
        <div className="group relative">
          <Avatar name={name} size="big" />
          <div
            className="hidden group-hover:block group-focus-within:block absolute right-0 bg-white border-2 border-slate-200 shadow-lg rounded-lg mt-2 w-48 z-50"
            onClick={(e) => e.stopPropagation()} // Prevents closing on click inside
          >
            <div className="px-4 py-2 text-left text-base font-semibold bg-slate-50 text-slate-800">
              {name}
              <p className="text-slate-400 text-xs">{email}</p>
            </div>
            <div className="border-b border-t px-2 text-center text-sm text-slate-500 py-2 hover:bg-slate-100">
              <textarea
                className="border-none bg-transparent focus:outline-none w-full resize-none"
                placeholder="Edit catchphrase..."
                value={catchphrase}
                rows={1}
                ref={textAreaRef}
                onChange={(e) => {
                  e.currentTarget.style.height = "auto";
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                }}
              />
            </div>
            <div
              className="text-center text-sm text-red-500 py-2 cursor-pointer hover:bg-red-100 rounded-b-lg"
              onClick={() => {
                localStorage.removeItem("Authorization");
                navigate("/");
              }}
            >
              Sign Out
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
