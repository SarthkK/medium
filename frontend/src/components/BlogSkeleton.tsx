function BlogSkeleton() {
  return (
    <div className="border-b border-slate-200 w-full p-5 flex flex-col gap-2 min-w-[400px] sm:min-w-[572px] cursor-pointer animate-pulse">
      {/* Avatar and Author Name */}
      <div className="flex items-center">
        <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
        <div className="ml-2 flex flex-col gap-1">
          <div className="w-24 h-4 bg-slate-200 rounded"></div>
          <div className="w-16 h-3 bg-slate-200 rounded"></div>
        </div>
      </div>

      {/* Title Placeholder */}
      <div className="w-3/4 h-4 bg-slate-200 rounded"></div>

      {/* Content Placeholder */}
      <div className="w-full h-4 bg-slate-200 rounded"></div>
      <div className="w-5/6 h-4 bg-slate-200 rounded"></div>
      <div className="w-4/6 h-4 bg-slate-200 rounded"></div>

      {/* Read Time Placeholder */}
      <div className="w-20 h-3 bg-slate-200 rounded"></div>
    </div>
  );
}

export default BlogSkeleton;
