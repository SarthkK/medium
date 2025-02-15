import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col">
      <nav className="w-full flex justify-between py-4 px-8 border-b items-center">
        <div className="text-3xl">Blogs</div>
        <div className="flex gap-4">
          <Link to={"/signin"}>
            <div className="rounded-lg bg-black text-white px-4 py-2">
              Sign In
            </div>
          </Link>
          <Link to={"/signup"}>
            <div className="rounded-lg bg-black text-white px-4 py-2">
              Sign Up
            </div>
          </Link>
        </div>
      </nav>
      <div className="flex-grow text-5xl p-8 md:text-6xl lg:text-8xl lg:p-16 bg-slate-100 flex flex-col justify-between gap-3">
        <p className="text-slate-900">
          A modern way to flesh out and share your thoughts
        </p>
        <div className="border-l border-black p-4 lg:p-12 bg-slate-200">
          <Link to={"/signin"}>
            <div className="hover:border-b border-black p-4">Sign in</div>
          </Link>
          <Link to={"/signup"}>
            <div className="hover:border-b border-black p-4">Sign up</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
