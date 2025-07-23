import { getPostBySlug } from "@/lib/api";

export default async function Page({params}: {params: Promise<{slug: string}> }) {
    const {slug} = await params;
    const post = await getPostBySlug(slug);
    
    return (
        <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
        </div>
    );
}