import makeEllipsis from "@/utils/makeEllipsis";
import { styled } from "styled-components";
import Flex from "./Flex";
import Text from "./Text";

interface IProp {
  direction: "prev" | "next";
  title: string;
}

export default function NextPostCard(props: IProp) {
  return (
    <PostCardWrapper borderRadius="6px">
      <Flex padding="24px" flexDirection="column">
        <Text fontSize="0.9rem">
          {props.direction === "prev" ? "이전글" : "다음글"}
        </Text>
        <Text fontWeight="bold" fontSize="1rem" tagName="h2">
          {makeEllipsis(props.title, 37)}
        </Text>
      </Flex>
    </PostCardWrapper>
  );
}

const PostCardWrapper = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.palette.border};
  margin: 1rem auto;
  flex: 1;
  p,
  h1 {
    word-break: break-all;
  }
`;
