'use client'
import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'
import { type BlogStore, createBlogStore } from '@/state/blogState'

export type BlogStoreApi = ReturnType<typeof createBlogStore>;

export const BlogStoreContext = createContext<BlogStoreApi | undefined>(
  undefined,
)

export interface BlogStoreProviderProps {
  children: ReactNode
}

export const BlogStoreProvider = ({
  children,
}: BlogStoreProviderProps) => {
  const storeRef = useRef<BlogStoreApi | null>(null)
  if(storeRef.current === null) {
    storeRef.current = createBlogStore();
  }

  return (
    <BlogStoreContext.Provider value={storeRef.current}>
      {children}
    </BlogStoreContext.Provider>
  )
}

export const useBlogStore = <T,>(selector: (store: BlogStore) => T,): T => {
  const blogStoreContext = useContext(BlogStoreContext);

  if (!blogStoreContext)
    throw new Error('useBlogStore must be used within the provider');

  return useStore(blogStoreContext, selector);
}