import React from "react";

const DashboardCardSkeleton = () => {
  return (
    <div className="w-full p-5 bg-white rounded-3xl flex flex-col justify-between h-30 shadow-xl shadow-gray-100/10 animate-pulse">
      {/* Top Row: Title & Icon Skeleton */}
      <div className="flex justify-between items-center">
        <div className="h-4 w-24 bg-gray-200 rounded-md" />
        <div className="size-10 rounded-full bg-gray-200" />
      </div>

      {/* Bottom Row: Count & Action Skeleton */}
      <div className="flex items-end justify-between">
        <div className="h-7 w-12 bg-gray-200 rounded-md" />
        <div className="flex items-center gap-2">
          <div className="size-4 bg-gray-200 rounded-sm" />
          <div className="h-3.5 w-14 bg-gray-200 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default DashboardCardSkeleton;