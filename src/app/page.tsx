"use client";
import { compareDesc } from "date-fns";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "../../.contentlayer/generated";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );
  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black"></h1>
      {posts.map((post, idx) => {
        const Comp = useMDXComponent(post.body.code);
        return <Comp />;
      })}
    </div>
  );
}
