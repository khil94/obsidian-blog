import Flex from "@/components/Flex";
import Tag from "@/components/Tag";
import { allPosts } from "@/contentlayer/generated";
import { PostListByCategory } from "@/utils/category";
import { PostListByTag, tagList } from "@/utils/tag";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import HeadBar from "./HeadBar";
import PostList from "./PoistList";
import SideBar from "./SideBar";

export default function Home() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [postList, setPostList] = useState(allPosts);
  const [category, setCategory] = useState("전체");
  const tag = params.get("tag");

  const getPostListByCategory = () => {
    if (category === "전체") {
      return allPosts;
    } else {
      return PostListByCategory[category];
    }
  };

  const setPostListByCategory = () => {
    setPostList(getPostListByCategory());
  };

  const handleSelectCategory = (v: string) => {
    window.scrollTo(0, 0);
    setCategory(v);
  };

  const handleClickTag = (target: string) => {
    const temp = target === "" ? pathname : `${pathname}?tag=${target}`;
    router.push(temp);
  };

  useEffect(() => {
    if (tag && tag !== "") {
      const target =
        category === "전체" ? allPosts : PostListByCategory[category];
      setPostList(target.filter((v) => PostListByTag[tag].includes(v)));
    } else {
      setPostListByCategory();
    }
  }, [tag, category]);

  return (
    <HomePageWrapper
      style={{
        maxWidth: "1280px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <HeadBar category={category} onSelect={handleSelectCategory} />

      <Flex
        style={{
          width: "50%",
          flexWrap: "wrap",
          margin: "3rem auto",
          gap: "1rem",
          justifyContent: "center",
        }}
      >
        {Array.from(tagList).map((v) => {
          return (
            <CustomTag
              onClick={() => {
                if (tag === v) {
                  handleClickTag("");
                } else {
                  handleClickTag(v);
                }
              }}
              key={`tag-${v}`}
              className={`tag-btn ${tag === v ? "selected" : ""}`}
              style={{ padding: ".3rem" }}
              content={v}
            />
          );
        })}
      </Flex>
      <Flex
        style={{
          height: "inherit",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",
          gap: "2rem",
        }}
      >
        <SideBar onSelect={handleSelectCategory} category={category} />

        <PostList postList={postList} />
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
