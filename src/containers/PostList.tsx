import Button from "@/components/Button";
import Flex from "@/components/Flex";
import Text from "@/components/Text";
import { Post } from "@/contentlayer/generated";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import PostSummary from "./PostSummary";

interface IProp {
  postList: Post[];
}
const PAGE_SIZE = 5;
const POST_SUMMARY_WIDTH = "640px";

export default function PostList({ postList }: IProp) {
  const makeTotalPage = (length: number) => {
    return Math.ceil(length / PAGE_SIZE);
  };

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(makeTotalPage(postList.length));

  const handleChangePage = (target: number) => {
    window.scrollTo(0, 0);
    setPage(target);
  };

  useEffect(() => {
    setTotalPage(makeTotalPage(postList.length));
    setPage(0);
  }, [postList]);

  return (
    <Flex
      style={{
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        maxWidth: "fit-content",
      }}
    >
      <SummaryWrapper
        style={{
          flexDirection: "column",
        }}
      >
        {postList.length !== 0 ? (
          postList
            .slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)
            .map((v, i) => {
              return (
                <PostSummary
                  title={v.title}
                  description={v.description}
                  thumbnail={v.thumbnail}
                  url={v.url}
                  key={`summary-${v.title}_${i}`}
                  date={v.createdAt}
                  category={v.category}
                />
              );
            })
        ) : (
          <Flex style={{ width: "100%" }}>
            <Text>게시물이 없습니다.</Text>
          </Flex>
        )}
        <Flex
          style={{
            gap: "1rem",
            padding: "1rem",
          }}
        >
          {Array(totalPage)
            .fill(null)
            .map((_, i) => {
              return (
                <PageBtn
                  className={`${page === i ? "selected" : ""}`}
                  onClick={() => handleChangePage(i)}
                >
                  {i + 1}
                </PageBtn>
              );
            })}
        </Flex>
      </SummaryWrapper>
    </Flex>
  );
}

const PageBtn = styled(Button)`
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  border: 1px solid ${({ theme }) => theme.palette.border};
  &.selected {
    background-color: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.white};
  }
  padding: 1rem;
`;

const SummaryWrapper = styled(Flex)`
  width: ${POST_SUMMARY_WIDTH};
  ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;
