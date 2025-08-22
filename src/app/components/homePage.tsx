'use client';
import { getPostBySlug } from "@/lib/api";
import { useBlogStore } from "@/providers/blogStoreProvider";
import { BlogPost } from "@/state/blogState";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const getBlogList = useBlogStore(state => state.getBlogList);
  const blogList = useBlogStore(state => state.blogList);
  const getBlogPost = useBlogStore(state => state.getBlogPost);
  const createBlogPost = useBlogStore(state => state.createBlogPost);

  const [post, setPost] = useState<BlogPost>();

  useEffect(() => {
    getBlogList();
  }, [getBlogList]);

  const getThePost = async () => {
    var blogPost = await getPostBySlug('Something-Very-Good');
    setPost(blogPost);
  }

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
        <button onClick={() => createBlogPost({
          title: "Some Title",
          content: "Something very good",
          summary: "Very good",
          slug: "Something-Very-Good",
          author: "",
          likes: 0
        })}>Create a new Blog Post</button>

        <hr/>
        <button onClick={getThePost}>Get The post</button>
        <p>{JSON.stringify(post)}</p>
    </>
  );
}