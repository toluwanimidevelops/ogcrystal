"use client";
import { useRouter } from "next/navigation";

const BlogCard = ({
  id,
  image,
  text,
  title,
  category
}: {
  id: string;
  image: string;
  text: string;
  title: string;
  category?: string;
}) => {
  const navigate = useRouter();

  return (
    <div
      onClick={() => navigate.push(`/insights/${id}`)}
      className="w-full overflow-hidden hover:-translate-y-0.5 transition duration-300 cursor-pointer"
    >
      <img className="rounded-xl w-full h-60 object-cover" src={image} alt="" />
      <div className="flex items-center justify-between my-3">
<h3 className="text-base break-words capitalize text-slate-900 font-medium ">
        {title}
      </h3>
      {category && (
        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold  px-2 py-1 rounded">
          {category}
        </span>
      )}
      </div>
      
      <p className="text-xs break-words text-[#7a7a7a]/70 font-medium mt-1">
        {text.slice(0, 120)}...
      </p>
    </div>
  );
};

export default BlogCard;
