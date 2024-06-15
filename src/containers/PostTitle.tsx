import { dateToYYYYMMDD } from "@/utils/dateToYYYYMMDD";
import { styled } from "styled-components";
import Flex from "../components/Flex";
import Tag from "../components/Tag";
import Text from "../components/Text";

interface Iprop {
  content: string;
  createdAt: string;
  tags: string;
}
export default function PostTitle({ content, createdAt, tags }: Iprop) {
  const categoryList = tags.split(",").map((v) => v.trim());
  console.log("category list : ", categoryList);
  return (
    <PostTitleWrapper
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text wordBreak="keep-all" tagName="h1" fontSize="4rem" lineHeight="1">
        {content}
      </Text>
      <Flex
        margin="1rem auto"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex>
          {categoryList.map((v) => {
            return (
              <Tag margin="0 .2rem" padding=".3rem" key={v}>
                #{v}
              </Tag>
            );
          })}
        </Flex>
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
