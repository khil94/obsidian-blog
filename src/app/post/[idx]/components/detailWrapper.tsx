import Flex from "@/components/Flex";
import useObserver from "@/hooks/useObserver";
import { styled } from "styled-components";

interface Prop {
  detailEl: HTMLElement | null;
}

export default function DetailWrapper({ detailEl }: Prop) {
  const { currentId, headings, handleClickHead } = useObserver(detailEl);

  return (
    <Flex
      style={{
        flexDirection: "column",
        position: "fixed",
        top: "5rem",
        left: 0,
      }}
    >
      {headings.map((el) => {
        return (
          <TOC
            key={`key-of-${el.innerHTML}`}
            onClick={() => handleClickHead(el.innerHTML)}
            className={`${currentId === el.innerHTML ? "current" : ""}`}
          >
            {`${el.tagName === "H3" ? "\t" : ""}${el.innerHTML}`}
          </TOC>
        );
      })}
    </Flex>
  );
}

const TOC = styled.pre`
  cursor: pointer;
  &.current {
    font-weight: bold;
    font-size: 2rem;
  }
`;
