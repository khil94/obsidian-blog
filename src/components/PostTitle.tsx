import { dateToYYYYMMDD } from "@/utils/dateToYYYYMMDD";
import { styled } from "styled-components";
import Flex from "./Flex";
import Text from "./Text";

interface Iprop {
  content: string;
  createdAt: string;
}
export default function PostTitle({ content, createdAt }: Iprop) {
  return (
    <PostTitleWrapper
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text wordBreak="keep-all" tagName="h1" fontSize="4rem" lineHeight="1">
        {content}
      </Text>
      <Flex width="100%" justifyContent="flex-end">
        <Text>{dateToYYYYMMDD(createdAt)}</Text>
      </Flex>
    </PostTitleWrapper>
  );
}

const PostTitleWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  margin: 2rem 0;
`;
