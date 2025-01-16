"use client";
import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import NextPostCard from "@/containers/NextPostCard";
import PostDetail from "@/containers/PostDetail";
import PostTitle from "@/containers/PostTitle";
import { allPosts } from "@/contentlayer/generated";
import { useState } from "react";

export default function PostDetailPage({
  params,
}: {
  params: { idx: string };
}) {
  const idx = allPosts.findIndex(
    (v) => v.id === decodeURIComponent(params.idx as string)
  );
  const targetPost = allPosts[idx];

  const prevPost = allPosts[idx - 1];
  const nextPost = allPosts[idx + 1];

  function SetPostCard({ direction }: { direction: "prev" | "next" }) {
    const temp = direction === "prev" ? prevPost : nextPost;
    return temp ? (
      <NextPostCard url={temp.url} direction={direction} title={temp.title} />
    ) : (
      <Flex style={{ flex: "1" }} />
    );
  }

  const [detailEl, setDetailEl] = useState<HTMLElement | null>(null);

  return (
    <Flex
      style={{
        width: "100%",
        padding: "0 2rem",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {/* <DetailWrapper detailEl={detailEl} /> */}
      <Flex style={{ width: "100%", flexDirection: "column" }}>
        <PostTitle
          content={targetPost.title}
          createdAt={targetPost.createdAt}
          tags={targetPost.tags}
          thumbnail={targetPost.thumbnail}
        />
        <PostDetail detailRef={setDetailEl} code={targetPost.body.code} />
        <Flex style={{ justifyContent: "space-between", gap: "1rem" }}>
          <SetPostCard direction="prev" />
          <SetPostCard direction="next" />
        </Flex>
        <Anchor style={{ margin: "2rem 1rem" }} href="/">
          <Button style={{ width: "100%", height: "3rem" }}>
            <Flex
              style={{
                color: "white",
                backgroundColor: "inherit",
                justifyContent: "center",
                width: "100%",
              }}
            >
              목록으로
            </Flex>
          </Button>
        </Anchor>
      </Flex>
    </Flex>
  );
}
