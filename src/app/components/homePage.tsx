'use client';
import { useBlogStore } from "@/providers/blogStoreProvider";
import { useEffect } from "react";

export default function HomePage() {
  const getBlogList = useBlogStore(state => state.getBlogList);
  const blogList = useBlogStore(state => state.blogList);

  useEffect(() => {
    getBlogList();
  }, [getBlogList]);

  return (
    <div className="grid grid-cols-5">
      <div className="col-span-1"></div>
      <div className="col-span-3">
        <h1 className="text-3xl mb-3">Luno's Blog</h1>
        {blogList.map((blogListItem, index) => (
          <div key={index} className="grid grid-cols-7 mb-4 pb-3 pl-3 pr-3 ring-1 ring-white/10 rounded-sm p-2 hover:bg-white/5 transition-colors cursor-pointer">
            <div className="col-span-6">
              <div className="text-lg">{blogListItem.title}</div>
              <div className="text-sm italic ">{blogListItem.author} - {blogListItem.likes} Likes</div>
            </div>
            <div className="text-right text-sm italic pt-1">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</div>
          </div>))}
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}