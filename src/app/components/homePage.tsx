'use client';
import { useBlogStore } from "@/providers/blogStoreProvider";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  const getBlogList = useBlogStore(state => state.getBlogList);
  const blogList = useBlogStore(state => state.blogList);

  useEffect(() => {
    getBlogList();
  }, [getBlogList]);

  return (
    <>
      {blogList.map((blogListItem, index) => (
        <Link href={`/blog/${blogListItem.slug}`} key={index}>
          <div className="grid grid-cols-7 pb-3 pl-3 pr-3 p-2 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="col-span-6">
              <div className="text-lg">{blogListItem.title}</div>
              <div className="text-sm text-gray-400 mb-2">{blogListItem.summary}</div>
              <div className="text-sm italic ">{blogListItem.author} - {blogListItem.likes} Likes</div>
            </div>
            <div className="text-right text-sm italic pt-1">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
          </div>
          <div className="grid grid-cols-7 mb-4 outline" />
        </Link>))}
    </>
  );
}