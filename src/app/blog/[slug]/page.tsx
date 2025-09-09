'use client';

import { useBlogStore } from "@/providers/blogStoreProvider";
import { use } from "react";
import styles from './blog.module.css'

export default function Page({params}: {params: Promise<{slug: string}> }) {
    const {slug} = use(params);
    const getBlogPost = useBlogStore(state => state.getBlogPost);
    const post = getBlogPost(slug);
    
    return (
        <div className={styles.blog}>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            <p>{post.author}</p>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
    );
}