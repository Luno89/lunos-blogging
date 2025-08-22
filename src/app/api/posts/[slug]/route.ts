import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);
await client.connect();
console.log(`I started the client`)

export const GET = async (req: Request,{ params }: { params: Promise<{slug: string}>}) => {
    const { slug } = await params;
    const post = await client.db("blog").collection("posts").findOne({ slug });
    return NextResponse.json(post);
};

export const POST = async (req: Request) => {
    const { title, content, slug, summary, author, likes } = await req.json();
    const post = await client.db("blog").collection("posts").insertOne({ 
        title,
        summary,
        content, 
        slug,
        author,
        likes
    });
    return NextResponse.json(post);
};