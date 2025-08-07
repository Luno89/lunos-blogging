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
    getBlogPost: (slug: string) => {}
  }))
}