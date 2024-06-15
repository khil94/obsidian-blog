import Anchor from "@/components/Anchor";
import makeEllipsis from "@/utils/makeEllipsis";
import { styled } from "styled-components";
import Flex from "../components/Flex";
import Text from "../components/Text";

interface IProp {
  direction: "prev" | "next";
  title: string;
  url: string;
}

export default function NextPostCard(props: IProp) {
  return (
    <PostCardWrapper
      width="50%"
      borderRadius="6px"
      margin="1rem"
      href={props.url}
    >
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

const PostCardWrapper = styled(Anchor)`
  border: 1px solid ${({ theme }) => theme.palette.border};
  p,
  h2 {
    word-break: break-all;
  }
  h2 {
    color: ${({ theme }) => theme.palette.main};
  }
`;
