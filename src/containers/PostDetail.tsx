import { getUniversalText } from "@/utils/getTextFromNode";
import { useMDXComponent } from "next-contentlayer/hooks";
import { styled } from "styled-components";
interface Iprop {
  code: string;
  detailRef: React.Ref<HTMLDivElement>;
}
export default function PostDetail({ code, detailRef }: Iprop) {
  const Comp = useMDXComponent(code);
  return (
    <PostDetailWrapper ref={detailRef}>
      <Comp
        components={{
          img: ({ src, alt, width, height }) => (
            <ImageComponent
              src={src?.split("public")[1]}
              alt={alt}
              width={width}
              height={height}
              loading="lazy"
            />
          ),
          h2: ({ children }) => {
            return <h2 id={getUniversalText(children)}>{children}</h2>;
          },
          h3: ({ children }) => {
            return <h3 id={getUniversalText(children)}>{children}</h3>;
          },
        }}
      />
    </PostDetailWrapper>
  );
}

const PostDetailWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  padding-bottom: 4rem;
  h2,
  h3 {
    font-weight: bold;
    // font-size: ${({ theme }) => theme.palette.background1};
    font-size: 24px;
    margin: 36px 0;
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
    padding: 6px;
    color: ${({ theme }) => theme.palette.main};
    word-break: break-all;
  }
  table {
    margin: 1rem auto;
    th {
      padding: 0.4rem;
    }
  }
  code {
    margin: 0 0.5rem;
  }

  pre {
    width: 100%;
    margin: 1.5rem 0;
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

    code {
      white-space: pre-wrap;
    }
    code:not([data-language]) {
      padding: 24px;
    }
  }
  table {
    td {
      padding: 1rem;
    }
  }
  table,
  th,
  td {
    border: 1px solid ${({ theme }) => theme.palette.border};
    border-collapse: collapse;
  }
  hr {
    margin: 2rem 0;
  }

  ol,
  ul {
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 5px;
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
    display: block;
    font-weight: bold;
    color: ${({ theme }) => theme.palette.main};
    &:visited {
      color: ${({ theme }) => theme.palette.main};
    }
    &:hover {
      text-decoration: underline;
    }
  }
  strong {
    font-weight: bold;
  }
`;

const ImageComponent = styled.img`
  max-width: 100%;
  margin: 2rem auto;
  display: block;
`;
