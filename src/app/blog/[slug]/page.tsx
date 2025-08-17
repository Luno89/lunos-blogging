'use client';

import { useBlogStore } from "@/providers/blogStoreProvider";
import { use } from "react";

export default function Page({params}: {params: Promise<{slug: string}> }) {
    const {slug} = use(params);
    const getBlogPost = useBlogStore(state => state.getBlogPost);
    const post = getBlogPost(slug);
    
    return (
        <div>
            <h1 className="text-3xl mb-3">{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
    );
}