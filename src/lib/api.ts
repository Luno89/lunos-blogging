import { BlogPost } from "@/state/blogState";

export const getBlogListFromAPI = async () => {
  const res = await fetch('/api/posts');
  const posts = await res.json();
  return posts;
}

export const getPostBySlug = async (slug: string) => {
  const res = await fetch(`/api/posts/${slug}`);
  const post = await res.json();
  return post;
};

export const createBlogPost = async (blogPost: BlogPost) => {
  const res = await fetch(`/api/posts/${blogPost.slug}`, {
    method: "POST",
    body: JSON.stringify(blogPost)
  })
}
