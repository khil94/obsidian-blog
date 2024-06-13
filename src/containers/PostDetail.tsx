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
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  h2,
  h3 {
    font-weight: bold;
    // font-size: ${({ theme }) => theme.palette.background1};
    font-size: 24px;
    margin: 12px 0;
  }

  blockquote {
    padding: 24px;
    background-color: ${({ theme }) => theme.palette.background2};
    border-radius: 6px;
    color: ${({ theme }) => theme.palette.white};

    margin: 12px 0;
  }
  code:not([data-language]) {
    background-color: ${({ theme }) => theme.palette.background2};
    border-radius: 6px;
    padding: 4px;
    color: ${({ theme }) => theme.palette.main};
  }
  pre {
    width: 100%;
    margin: 1.5rem 0;
    word-break: break-all;
    overflow: auto;
    border-radius: 5px;

    &::-webkit-scrollbar {
      width: 100%;
      height: 7.5px;
      border-radius: 0 0 5px 5px;
      background-color: ${({ theme }) => theme.palette.background1};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0 0 5px 5px;
      background-color: ${({ theme }) => theme.palette.main};
    }
  }

  ol,
  ul {
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 5px;
    border: ${({ theme }) => `1px solid ${theme.palette.border}`};
    background-color: ${({ theme }) => theme.palette.background1};
    list-style-type: inherit;
  }
  li {
    margin-left: 2rem;
  }
  ol {
    list-style-type: decimal;
  }

  a {
    font-weight: bold;
    color: ${({ theme }) => theme.palette.main};
    &:visited {
      color: ${({ theme }) => theme.palette.main};
    }
  }
  strong {
    font-weight: bold;
  }
`;
