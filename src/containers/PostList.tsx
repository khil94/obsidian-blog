import Button from "@/components/Button";
import Flex from "@/components/Flex";
import Text from "@/components/Text";
import { Post } from "@/contentlayer/generated";
import { useLayoutEffect, useState } from "react";
import { styled } from "styled-components";
import PostSummary from "./PostSummary";

interface IProp {
  postList: Post[];
}
const CONTENT_SIZE = 5;
const PAGE_SIZE = 5;
const POST_SUMMARY_WIDTH = "600px";

export default function PostList({ postList }: IProp) {
  const [page, setPage] = useState(0);
  const totalPage = Math.ceil(postList.length / CONTENT_SIZE);
  const idx = Math.floor(page / PAGE_SIZE);

  const handleChangePage = (target: number) => {
    window.scrollTo(0, 0);
    setPage(target);
  };

  useLayoutEffect(() => {
    setPage(0);
  }, [postList.length]);

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
            .slice(page * CONTENT_SIZE, (page + 1) * CONTENT_SIZE)
            .map((v, i) => {
              return v.draft ? (
                <></>
              ) : (
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
            width: "100%",
            justifyContent: "center",
          }}
        >
          <PageBtn
            onClick={() => handleChangePage((idx - 1) * PAGE_SIZE)}
            disabled={idx === 0}
          >
            {"<"}
          </PageBtn>
          {totalPage - idx * PAGE_SIZE > 0 &&
            Array(Math.min(PAGE_SIZE, totalPage - idx * PAGE_SIZE))
              .fill(null)
              .map((v, i) => {
                const temp = PAGE_SIZE * idx + i;
                return (
                  <PageBtn
                    className={`${page === temp ? "selected" : ""}`}
                    onClick={() => handleChangePage(temp)}
                    key={`btn-page-${temp}`}
                  >
                    {temp + 1}
                  </PageBtn>
                );
              })}
          <PageBtn
            onClick={() => handleChangePage((idx + 1) * PAGE_SIZE)}
            disabled={idx === Math.floor(totalPage / PAGE_SIZE)}
          >
            {">"}
          </PageBtn>
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
    cursor: default;
  }
  &:disabled {
    filter: brightness(80%);
    color: ${({ theme }) => theme.palette.border};
    cursor: default;
  }
  padding: 1rem;
  &:hover:not(:disabled):not(.selected) {
    border: 1px solid ${({ theme }) => theme.palette.main};
    background-color: ${({ theme }) => theme.palette.background2};
  }
`;

const SummaryWrapper = styled(Flex)`
  width: ${POST_SUMMARY_WIDTH};
  ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;
