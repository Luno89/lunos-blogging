'use client';

import { useBlogStore } from "@/providers/blogStoreProvider";
import { use, useEffect, useState } from "react";
import styles from './blog.module.css'
import { BlogPost } from "@/state/blogState";
import { get } from "http";

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const getBlogPost = useBlogStore(state => state.getBlogPost);
    const [post, setPost] = useState<BlogPost>({
        title: "Loading...",
        content: "<p>Loading...</p>",
        summary: "Loading...",
        slug: "loading",
    } as BlogPost);

    useEffect(() => {
        getBlogPost(slug).then(fetchedPost => {
            setPost(fetchedPost);
        });
    }, [getBlogPost, slug]);

    return (
        <div className={styles.blog}>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            <p>{post.author}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
    );
}