"use client";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "../../.contentlayer/generated";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { useMDXComponent } from "next-contentlayer/hooks";
import { device } from "@/styles/device";

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.title}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time
        dateTime={post.createdAt}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(post.createdAt), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.code }}
      />
    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );
  console.log(posts[0].body.code);
  const Test = useMDXComponent(posts[0].body.code);
  console.log([posts[0].body]);
  console.log(device);
  return (
    <ThemeProvider theme={{ theme, device }}>
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl font-black"></h1>
        {posts.map((post, idx) => {
          const Comp = useMDXComponent(post.body.code);
          return <Comp />;
        })}
      </div>
    </ThemeProvider>
  );
}
