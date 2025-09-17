import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);
await client.connect();
console.log(`I started the client`)

export const GET = async (req: Request) => {
    const posts = await client.db("blog").collection("posts").find().toArray();
    return NextResponse.json(posts);
}