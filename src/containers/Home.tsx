import Flex from "@/components/Flex";
import { allPosts } from "@/contentlayer/generated";
import { PostListByCategory } from "@/utils/category";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import PostSummary from "./PostSummary";
import SideBar from "./SideBar";

export default function Home() {
  const [postList, setPostList] = useState(allPosts);
  const [category, setCategory] = useState("전체");

  useEffect(() => {
    if (category === "전체") {
      setPostList(allPosts);
    } else {
      setPostList(PostListByCategory[category]);
    }
  }, [category]);

  return (
    <HomePageWrapper
      maxWidth="1280px"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Flex width="100%">
        <Flex>
          <SideBar onSelect={(v) => setCategory(v)} category={category} />
        </Flex>
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
      </Flex>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled(Flex)`
  // ${({ theme }) => theme.device.laptop} {
  //   background-color: green;
  // }
`;

const PostListWrapper = styled(Flex)``;
