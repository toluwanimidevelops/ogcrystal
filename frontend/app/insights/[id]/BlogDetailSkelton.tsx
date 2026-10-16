const BlogDetailSkeleton = () => {
  return (
    <div className="animate-pulse w-full">
      {/* Hero section */}
      <div className="w-full pb-10 bg-[#071a3d] pt-30">
        <div className="w-full max-w-7xl px-6 md:px-12 mx-auto">
          <div className="h-4 w-24 bg-white/20 rounded mb-5" />
          <div className="h-6 w-32 bg-white/10 rounded-full mb-7" />
          <div className="flex max-md:flex-col justify-between gap-6">
            <div className="flex-1">
              <div className="h-9 w-3/4 bg-white/20 rounded mb-4" />
              <div className="flex gap-2">
                <div className="h-4 w-20 bg-white/10 rounded" />
                <div className="h-4 w-24 bg-white/10 rounded" />
                <div className="h-4 w-16 bg-white/10 rounded" />
              </div>
            </div>
            <div className="max-w-full w-[700px] space-y-2">
              <div className="h-3 w-full bg-white/10 rounded" />
              <div className="h-3 w-full bg-white/10 rounded" />
              <div className="h-3 w-2/3 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex max-md:flex-col w-full max-w-7xl mx-auto px-6 md:px-3 mt-10 gap-10">
        <div className="w-full min-w-0 flex-1">
          {/* Featured image */}
          <div className="w-full h-180 max-h-180 rounded-2xl bg-gray-200" />

          <div className="w-full max-md:px-2 mt-6">
            {/* Title */}
            <div className="h-10 w-2/3 bg-gray-200 rounded mb-4" />

            {/* Body paragraphs */}
            <div className="space-y-3 mt-1">
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-5/6 bg-gray-200 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
              <div className="h-3 w-3/4 bg-gray-200 rounded" />
            </div>

            {/* Mobile "Enjoyed this" box */}
            <div className="w-full md:hidden my-3 rounded-2xl border-2 border-[#071A3D]/10 p-5 bg-gray-100">
              <div className="h-5 w-32 bg-gray-200 rounded mb-3" />
              <div className="h-3 w-full bg-gray-200 rounded mb-4" />
              <div className="h-11 w-full bg-gray-200 rounded" />
            </div>

            {/* Comments section */}
            <div className="py-4">
              <div className="h-5 w-24 bg-gray-200 rounded mb-4" />
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className="p-3 w-full max-w-[500px] rounded-md border border-gray-200 bg-gray-50"
                  >
                    <div className="flex justify-between mb-2">
                      <div className="h-3 w-20 bg-gray-200 rounded" />
                      <div className="h-3 w-16 bg-gray-200 rounded" />
                    </div>
                    <div className="h-3 w-full bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
            </div>

            {/* Comment form */}
            <div className="w-full max-w-3xl space-y-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <div className="h-3 w-12 bg-gray-200 rounded mb-2" />
                  <div className="h-10 w-full bg-gray-200 rounded-md" />
                </div>
                <div className="flex-1">
                  <div className="h-3 w-12 bg-gray-200 rounded mb-2" />
                  <div className="h-10 w-full bg-gray-200 rounded-md" />
                </div>
              </div>
              <div>
                <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
                <div className="h-24 w-full bg-gray-200 rounded-md" />
              </div>
              <div className="h-11 w-28 bg-gray-200 rounded-md" />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-[400px] shrink-0 max-md:hidden max-w-full">
          <div className="sticky flex gap-4 flex-col top-30">
            <div className="w-full rounded-2xl bg-white border-2 border-[#071A3D]/10 p-5">
              <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex border-b border-[#071A3D]/20 py-4 justify-between"
                  >
                    <div className="h-3 w-24 bg-gray-200 rounded" />
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                  </div>
                ))}
              </div>
              <div className="h-11 w-full bg-gray-200 rounded mt-5" />
            </div>
            <div className="w-full rounded-2xl bg-gray-100 border-2 border-[#071A3D]/10 p-5">
              <div className="h-5 w-32 bg-gray-200 rounded mb-3" />
              <div className="h-3 w-full bg-gray-200 rounded mb-4" />
              <div className="h-11 w-full bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Related blogs */}
      <div className="w-full max-w-7xl px-6 mx-auto mt-10">
        <div className="h-6 w-40 bg-gray-200 rounded mb-4" />
        <div className="grid gap-5 mt-2 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden">
              <div className="w-full h-48 bg-gray-200 rounded-2xl" />
              <div className="h-4 w-20 bg-gray-200 rounded mt-3" />
              <div className="h-5 w-3/4 bg-gray-200 rounded mt-2" />
              <div className="h-3 w-full bg-gray-200 rounded mt-2" />
              <div className="h-3 w-2/3 bg-gray-200 rounded mt-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailSkeleton;