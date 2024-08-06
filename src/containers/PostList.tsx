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
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
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
        <Flex style={{ width: "100%" }}>
          <Text>게시물이 없습니다.</Text>
        </Flex>
      )}
    </Flex>
  );
}
