import makeEllipsis from "@/utils/makeEllipsis";
import Link from "next/link";
import { styled } from "styled-components";
import Flex from "../components/Flex";
import Text from "../components/Text";

interface IProp {
  direction: "prev" | "next";
  title: string;
  id: number;
}

export default function NextPostCard(props: IProp) {
  return (
    <PostCardWrapper href={`/post/${props.id}`}>
      <Flex
        borderRadius="6px"
        width="100%"
        padding="24px"
        flexDirection="column"
      >
        <Text fontWeight="bold" fontSize="0.9rem">
          {props.direction === "prev" ? "이전글" : "다음글"}
        </Text>
        <Text fontWeight="bold" fontSize="1rem" tagName="h2">
          {makeEllipsis(props.title, 19)}
        </Text>
      </Flex>
    </PostCardWrapper>
  );
}

const PostCardWrapper = styled(Link)`
  border: 1px solid ${({ theme }) => theme.palette.border};
  width: 50%;
  border-radius: 6px;
  margin: 1rem;
  p,
  h2 {
    word-break: break-all;
  }
  h2 {
    color: ${({ theme }) => theme.palette.main};
  }
`;
