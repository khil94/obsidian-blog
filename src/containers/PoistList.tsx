import Flex from "@/components/Flex";
import Text from "@/components/Text";
import { Post } from "@/contentlayer/generated";
import PostSummary from "./PostSummary";

interface IProp {
  postList: Post[];
}

export default function PostList({ postList }: IProp) {
  return (
    <Flex
      style={{
        maxWidth: "580px",
        alignItems: "center",
        padding: "1rem 0",
        flexDirection: "column",
      }}
    >
      {postList.length !== 0 ? (
        postList.map((v, i) => {
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
        <Flex style={{ minWidth: "36rem", padding: "2.4rem" }}>
          <Text>게시물이 없습니다.</Text>
        </Flex>
      )}
    </Flex>
  );
}
