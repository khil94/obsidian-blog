import Flex from "@/components/Flex";
import Tag from "@/components/Tag";
import { allPosts } from "@/contentlayer/generated";
import { PostListByCategory } from "@/utils/category";
import { PostListByTag, tagList } from "@/utils/tag";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import HeadBar from "./HeadBar";
import PostSummary from "./PostSummary";
import SideBar from "./SideBar";

export default function Home() {
  const [postList, setPostList] = useState(allPosts);
  const [category, setCategory] = useState("전체");
  const [tag, setTag] = useState("");

  const getPostListByCategory = () => {
    if (category === "전체") {
      setPostList(allPosts);
    } else {
      setPostList(PostListByCategory[category]);
    }
  };

  const handleSelectCategory = (v: string) => {
    window.scrollTo(0, 0);
    setCategory(v);
  };

  useEffect(() => {
    getPostListByCategory();
  }, [category]);

  useEffect(() => {
    if (tag !== "") {
      const target =
        category === "전체" ? allPosts : PostListByCategory[category];
      setPostList(target.filter((v) => PostListByTag[tag].includes(v)));
    } else {
      getPostListByCategory();
    }
  }, [tag]);

  return (
    <HomePageWrapper
      maxWidth="1280px"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <HeadBar category={category} onSelect={handleSelectCategory} />

      <Flex gap="1rem">
        {Array.from(tagList).map((v) => {
          return (
            <CustomTag
              onClick={() => {
                if (tag === v) {
                  setTag("");
                } else {
                  setTag(v);
                }
              }}
              className={`tag-btn ${tag === v ? "selected" : ""}`}
              padding=".3rem"
            >{`#${v} `}</CustomTag>
          );
        })}
      </Flex>
      <Flex
        height="inherit"
        justifyContent="center"
        flexDirection="row"
        width="100%"
        gap="2rem"
      >
        <SideBar onSelect={handleSelectCategory} category={category} />

        <Flex>
          <PostListWrapper gap="2rem" padding="1rem 0" flexDirection="column">
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
      </Flex>
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled(Flex)`
  // ${({ theme }) => theme.device.laptop} {
  //   background-color: green;
  // }
`;

const CustomTag = styled(Tag)`
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  border: 1px solid ${({ theme }) => theme.palette.border};
  &.selected {
    background-color: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.white};
  }
`;

const PostListWrapper = styled(Flex)``;
