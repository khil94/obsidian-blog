import Flex from "@/components/Flex";
import Text from "@/components/Text";
import { dateToYYYYMMDD } from "@/utils/dateToYYYYMMDD";
import Link from "next/link";
import { styled } from "styled-components";

interface IProp {
  title: string;
  description: string;
  thumbnail?: string;
  url: string;
  date: string;
}

export default function PostSummary({
  title,
  description,
  thumbnail,
  url,
  date,
}: IProp) {
  return (
    <Link href={url}>
      <PostSummaryWrapper borderRadius="8px" margin="1rem auto">
        <img src={thumbnail} alt="thumbnail" />
        <Flex backgroundColor="none" padding="2.4rem" flexDirection="column">
          <Text tagName="h2" fontSize="1.5rem" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize=".8rem" textAlign="right">
            {dateToYYYYMMDD(date)}
          </Text>
          <Text>{description}</Text>
        </Flex>
      </PostSummaryWrapper>
    </Link>
  );
}

const PostSummaryWrapper = styled(Flex)`
  border: 1px ${({ theme }) => theme.palette.border} solid;
`;
