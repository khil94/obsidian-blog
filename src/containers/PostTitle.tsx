import Anchor from "@/components/Anchor";
import { dateToYYYYMMDD } from "@/utils/dateToYYYYMMDD";
import { styled } from "styled-components";
import Flex from "../components/Flex";
import Tag from "../components/Tag";
import Text from "../components/Text";

interface Iprop {
  content: string;
  createdAt: string;
  tags: string[];
  thumbnail?: string;
}
export default function PostTitle({
  content,
  createdAt,
  tags,
  thumbnail,
}: Iprop) {
  return (
    <PostTitleWrapper
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        tagName="h1"
        style={{
          width: "100%",
          wordBreak: "keep-all",
          textAlign: "left",
          fontSize: "3.5rem",
          lineHeight: "1.3",
          margin: "2rem 0",
        }}
      >
        {content}
      </Text>

      <Flex
        style={{
          margin: "2rem auto",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PostTagListWrapper
          style={{
            width: "60%",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {tags.map((v) => {
            return (
              <Anchor
                href={{
                  pathname: "/",
                  query: { tag: v },
                }}
                key={v}
              >
                <Tag
                  style={{
                    margin: "0 .2rem",
                    padding: ".3rem",
                  }}
                  content={v}
                />
              </Anchor>
            );
          })}
        </PostTagListWrapper>
        <Text>{dateToYYYYMMDD(createdAt)}</Text>
      </Flex>
      {thumbnail && (
        <img
          style={{ maxWidth: "80%", width: "100%" }}
          src={`${thumbnail}`}
          alt={thumbnail}
        />
      )}
    </PostTitleWrapper>
  );
}

const PostTitleWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  margin: 2rem 0;
`;

const PostTagListWrapper = styled(Flex)`
  &::-webkit-scrollbar {
    height: 0.5rem;
    background-color: ${({ theme }) => theme.palette.border};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.main};
  }
`;
