const BlogCardSkeleton = () => {
  return (
    <div className="w-full overflow-hidden animate-pulse">
      <div className="rounded-xl w-full h-60 bg-slate-200" />
      <div className="flex items-center justify-between my-3">
        <div className="h-4 bg-slate-200 rounded w-2/3" />
        <div className="h-5 bg-slate-200 rounded w-16" />
      </div>
      <div className="space-y-2 mt-1">
        <div className="h-3 bg-slate-200 rounded w-full" />
        <div className="h-3 bg-slate-200 rounded w-4/5" />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;