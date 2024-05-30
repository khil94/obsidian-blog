import { useMDXComponent } from "next-contentlayer/hooks";
import { styled } from "styled-components";

interface Iprop {
  code: string;
}
export default function PostDetail({ code }: Iprop) {
  const Comp = useMDXComponent(code);
  return (
    <PostDetailWrapper>
      <Comp />
    </PostDetailWrapper>
  );
}

const PostDetailWrapper = styled.div`
  // background-color: ${({ theme }) => theme.palette.background1};
  p {
    color: ${({ theme }) => theme.palette.black};
    padding: 24px;
  }
`;
