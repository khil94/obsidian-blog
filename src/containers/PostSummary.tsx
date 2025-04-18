import Anchor from "@/components/Anchor";
import Flex from "@/components/Flex";
import Text from "@/components/Text";
import { dateToYYYYMMDD } from "@/utils/dateToYYYYMMDD";
import makeEllipsis from "@/utils/makeEllipsis";
import { styled } from "styled-components";

interface IProp {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  date: string;
  category: string;
}

export default function PostSummary({
  title,
  description,
  thumbnail,
  url,
  date,
  category,
}: IProp) {
  return (
    <PostSummaryWrappingAnchor href={url}>
      <PostSummaryWrapper
        style={{
          flexDirection: "column",
          gap: "1.5rem",
          padding: "1.2rem",
          borderRadius: "8px",
        }}
      >
        <Flex
          style={{
            justifyContent: "center",
          }}
        >
          <PostSummaryThumbnail height={300} src={thumbnail} alt="thumbnail" />
        </Flex>
        <Flex
          style={{
            width: "100%",
            backgroundColor: "none",
            flexDirection: "column",
            gap: ".5rem",
          }}
        >
          <Text style={{ fontSize: ".8rem", textAlign: "right" }}>
            {dateToYYYYMMDD(date)}
          </Text>
          <Text
            tagName="h2"
            style={{
              maxLine: 2,
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              minHeight: "3.5rem",
              maxLine: 2,
            }}
          >
            {makeEllipsis(description, 83)}
          </Text>
          <PostSummaryCategory style={{ fontSize: ".8rem" }}>
            {category}
          </PostSummaryCategory>
        </Flex>
      </PostSummaryWrapper>
    </PostSummaryWrappingAnchor>
  );
}

const PostSummaryWrappingAnchor = styled(Anchor)`
  width: 100%;
  padding: 1rem;
`;

const PostSummaryWrapper = styled(Flex)`
  border: 1px ${({ theme }) => theme.palette.border} solid;
  &:hover {
    transform: scale(1.05);
  }
`;

const PostSummaryCategory = styled(Text)`
  color: ${({ theme }) => theme.palette.main};
`;

const PostSummaryThumbnail = styled.img`
  max-width: 100%;
  object-fit: scale-down;
  border-radius: 6px;
`;
