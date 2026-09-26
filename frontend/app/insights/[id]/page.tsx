import type { Metadata } from "next";
import BlogDetailClient from "./BlogDetailClient";

async function getBlog(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.blog ?? null;
  } catch (err) {
    console.error("Failed to fetch blog for metadata:", err);
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return {
      title: "Insight not found",
      description: "This article could not be found.",
    };
  }

  const description =
    blog.content?.slice(0, 160).trim() + (blog.content?.length > 160 ? "..." : "");

  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/insights/${id}`;

  return {
    title: blog.title,
    description,
    openGraph: {
      title: blog.title,
      description,
      url,
      siteName: "Your Site Name",
      images: blog.imageUrl
        ? [
            {
              url: blog.imageUrl,
              width: 1200,
              height: 630,
              alt: blog.title,
            },
          ]
        : [],
      type: "article",
      publishedTime: blog.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: blog.imageUrl ? [blog.imageUrl] : [],
    },
    alternates: {
      canonical: url,
    },
  };
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const blog = await getBlog(id);

  return <BlogDetailClient id={id} initialBlog={blog} />;
};

export default Page;