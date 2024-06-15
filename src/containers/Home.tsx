import Flex from "@/components/Flex";
import { allPosts } from "@/contentlayer/generated";
import { useState } from "react";
import { styled } from "styled-components";
import PostSummary from "./PostSummary";

export default function Home() {
  const [postList, setPostList] = useState(allPosts);

  return (
    <HomePageWrapper
      maxWidth="1280px"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <PostListWrapper padding="2rem" flexDirection="column">
        {postList.map((v) => {
          return (
            <PostSummary
              title={v.title}
              description={v.description}
              thumbnail={v.thumbnail}
              url={v.url}
              date={v.createdAt}
            />
          );
        })}
      </PostListWrapper>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled(Flex)``;

const PostListWrapper = styled(Flex)``;
