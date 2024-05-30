import { styled } from "styled-components";

interface Iprop {
  content: string;
}
export default function PostTitle({ content }: Iprop) {
  return <PostTitleWrapper>{content}</PostTitleWrapper>;
}

const PostTitleWrapper = styled.div`
  // background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.black};
  padding: 24px;
`;
