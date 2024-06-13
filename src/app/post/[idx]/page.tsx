"use client";
import Flex from "@/components/Flex";
import NextPostCard from "@/components/NextPostCard";
import PostDetail from "@/components/PostDetail";
import PostTitle from "@/components/PostTitle";
import { allPosts } from "@/contentlayer/generated";
import useTheme from "@/hooks/useTheme";
import { useThemeSelector } from "@/store/useThemeSelector";
import { useMDXComponent } from "next-contentlayer/hooks";
import { styled } from "styled-components";

export default function PostDetailPage({ params }: any) {
  const targetPost = allPosts[params.idx];

  const Comp = useMDXComponent(targetPost.body.code);
  const { toggleTheme } = useTheme();
  const { theme } = useThemeSelector((theme) => theme.theme);
  console.log("current theme", theme);

  const prevPost = allPosts[params.idx - 1];
  const nextPost = allPosts[params.idx + 1];

  function SetPostCard({ direction }: { direction: "prev" | "next" }) {
    const temp = direction === "prev" ? prevPost : nextPost;
    return temp ? (
      <NextPostCard direction={direction} title={temp.title} />
    ) : (
      <Flex flex="1" />
    );
  }

  return (
    <Flex flexDirection="column" alignItems="center">
      <div onClick={toggleTheme}>detail</div>
      <Flex maxWidth="768px" flexDirection="column" margin="0 auto">
        <PostTitle
          content={targetPost.title}
          createdAt={targetPost.createdAt}
        />
        <PostDetail code={targetPost.body.code} />
        <Flex justifyContent="space-between">
          <SetPostCard direction="prev" />
          <SetPostCard direction="next" />
        </Flex>
      </Flex>
    </Flex>
  );
}

const TestDiv = styled.div`
  background-color: ${({ theme }) => theme.palette.background1};
`;

const PostP = styled.p`
  color: ${({ theme }) => theme.palette.border};
`;
