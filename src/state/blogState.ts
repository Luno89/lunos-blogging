import { createStore } from "zustand";

export type BlogListItem = {
  title: string,
  author: string,
  likes: number,
}

export type BlogState = {
  blogList: BlogListItem[]
}

export type BlogAction = {
  like: () => void,
  unLike: () => void,
  getBlogPost: (slug: string) => void
  getBlogList: () => void
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
    getBlogPost: (slug: string) => {},
    getBlogList: () => set(state => ({
      blogList: [
        { title: "First Blog Post", author: "Author One", likes: 10 },
        { title: "Second Blog Post", author: "Author Two", likes: 20 },
        { title: "Third Blog Post", author: "Author Three", likes: 30 }
      ]
    }))
  }))
}