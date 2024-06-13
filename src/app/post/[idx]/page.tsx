"use client";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import NextPostCard from "@/containers/NextPostCard";
import PostDetail from "@/containers/PostDetail";
import PostTitle from "@/containers/PostTitle";
import { allPosts } from "@/contentlayer/generated";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PostDetailPage() {
  const params = useParams();
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
      <Flex flex="1" />
    );
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <Flex maxWidth="768px" flexDirection="column" margin="0 auto">
        <PostTitle
          content={targetPost.title}
          createdAt={targetPost.createdAt}
          categories={targetPost.category}
        />
        <PostDetail code={targetPost.body.code} />
        <Flex justifyContent="space-between">
          <SetPostCard direction="prev" />
          <SetPostCard direction="next" />
        </Flex>
        <Link href="/">
          <Button margin="2rem 1rem" width="100%" height="3rem">
            <Flex
              color="white"
              backgroundColor="inherit"
              justifyContent="center"
              width="100%"
            >
              목록으로
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
