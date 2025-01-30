import React from "react";

function FullBlogSkeleton() {
  return (
    <div className="grid grid-cols-4 max-w-screen-xl w-full p-5 pt-12 animate-pulse">
      {/* Main Content Skeleton */}
      <div className="col-span-3">
        <div className="h-14 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4 mt-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mt-4"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mt-2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mt-2"></div>
      </div>

      {/* Author Section Skeleton */}
      <div className="col-span-1">
        <div className="h-6 bg-gray-300 rounded w-24"></div>
        <div className="flex items-center mt-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="flex flex-col justify-between gap-1 pl-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-3 bg-gray-200 rounded w-40 mt-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullBlogSkeleton;
