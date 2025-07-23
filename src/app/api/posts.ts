import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export const GET = async (req: Request) => {
    const { slug } = await req.json();
    const post = await client.db("blog").collection("posts").findOne({ slug });
    return NextResponse.json(post);
};