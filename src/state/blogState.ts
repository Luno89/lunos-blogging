import { createStore } from "zustand";
import {marked} from "marked";
import DOMPurify from "dompurify";
import { exampleMarkdownBlogPost } from "@/app/models/example";
import { createBlogPost, getPostBySlug } from "@/lib/api";

export type BlogListItem = {
  title: string,
  summary: string,
  slug: string,
  author: string,
  likes: number,
}

export interface BlogPost extends BlogListItem  {
  title: string,
  content: string,
}

export type BlogState = {
  blogList: BlogListItem[]
}

export type BlogAction = {
  like: () => void,
  unLike: () => void,
  getBlogPost: (slug: string) => BlogPost,
  getBlogList: () => void,
  createBlogPost: (blogPost: BlogPost) => void,
}

export type BlogStore = BlogState & BlogAction;

export const defaultInitState: BlogState = {
  blogList: []
}

export const createBlogStore = (initState: BlogState = defaultInitState) => {
  return createStore<BlogStore>()((set) => ({
    ...initState,
    like: () => set(state => ({})),
    unLike: () => set(state => ({})),
    getBlogPost: (slug: string) => {
      let blogPost: BlogPost = {
        title: `Blog Post for ${slug}`,
        content: `<p>This is the content for the blog post with slug: ${slug}</p>`,
        summary: "",
        slug: "",
        author: "",
        likes: 0
      };
      blogPost.content = DOMPurify.sanitize(marked.parse(exampleMarkdownBlogPost).toString());
      return blogPost;
    },
    getBlogList: () => set(state => ({
      blogList: [
        { title: "First Blog Post", author: "Author One", likes: 10, slug: "first-blog-post", summary: "This is the first blog post." },
        { title: "Second Blog Post", author: "Author Two", likes: 20, slug: "second-blog-post", summary: "This is the second blog post." },
        { title: "Third Blog Post", author: "Author Three", likes: 30, slug: "third-blog-post", summary: "This is the third blog post." },
      ]
    })),
    createBlogPost : (blogPost: BlogPost) => {
      createBlogPost(blogPost);
    }
  }))
}