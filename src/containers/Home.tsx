import Flex from "@/components/Flex";
import Tag from "@/components/Tag";
import { allPosts } from "@/contentlayer/generated";
import { PostListByCategory } from "@/utils/category";
import { useMemo, useState } from "react";
import { styled } from "styled-components";
import HeadBar from "./HeadBar";
import PostList from "./PostList";
import SideBar from "./SideBar";

export default function Home() {
  const [category, setCategory] = useState("전체");

  const postList = useMemo(() => {
    let temp = [];
    if (category === "전체") {
      temp = allPosts;
    } else {
      temp = PostListByCategory(allPosts, category);
    }

    return [...temp].sort((a, b) => {
      const aa = new Date(a.createdAt);
      const bb = new Date(b.createdAt);
      return bb.getTime() - aa.getTime();
    });
  }, [category]);

  const handleSelectCategory = (v: string) => {
    window.scrollTo(0, 0);
    setCategory(v);
  };

  return (
    <Flex
      style={{
        flexDirection: "column",
        width: "100%",
        padding: "0 24px",
      }}
    >
      <HeadBar category={category} onSelect={handleSelectCategory} />

      <Flex
        style={{
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          margin: "3rem auto",
          gap: "0 5%",
        }}
      >
        <SideBar onSelect={handleSelectCategory} category={category} />

        <PostList postList={postList} />
      </Flex>
    </Flex>
  );
}

const CustomTag = styled(Tag)`
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  border: 1px solid ${({ theme }) => theme.palette.border};
  &.selected {
    background-color: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.white};
  }
`;
