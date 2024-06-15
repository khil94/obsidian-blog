"use client";
import Home from "@/containers/Home";
import { compareDesc } from "date-fns";
import { allPosts } from "../../.contentlayer/generated";

export default function HomePage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );
  return (
    <div className="mx-auto max-w-xl py-8">
      <Home />
    </div>
  );
}
