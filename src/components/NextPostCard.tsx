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
    <PostCardWrapper width="50%" tagName="a" href="/" borderRadius="6px">
      <Flex width="100%" padding="24px" flexDirection="column">
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

const PostCardWrapper = styled(Flex)`
  border: 1px solid ${({ theme }) => theme.palette.border};
  margin: 1rem;
  text-decoration: none;
  p,
  h2 {
    word-break: break-all;
  }
  h2 {
    color: ${({ theme }) => theme.palette.main};
  }
`;
