import Flex from "@/components/Flex";
import useObserver from "@/hooks/useObserver";
import { getUniversalText } from "@/utils/getTextFromNode";
import { styled } from "styled-components";

interface Prop {
  detailEl: HTMLElement | null;
}

export default function DetailWrapper({ detailEl }: Prop) {
  const { currentId, headings, handleClickHead } = useObserver(detailEl);

  return (
    <Wrapper
      style={{
        flexDirection: "column",
        position: "sticky",
        paddingTop: "4.6rem",
        top: "4.6rem",
        marginRight: "4rem",
        right: 0,
        textAlign: "right",
        height: "fit-content",
      }}
    >
      {headings.map((el) => {
        const target = getUniversalText(el);
        return (
          <TOC
            key={`key-of-${target}`}
            onClick={() => handleClickHead(target)}
            className={`${currentId === target ? "current" : ""}`}
          >
            {`${target}${el.tagName === "H3" ? "\t" : ""}`}
          </TOC>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;

const TOC = styled.pre`
  cursor: pointer;
  font-size: 1rem;
  min-width: 15rem;
  padding: 0;

  &.current {
    font-weight: bold;
    transform: scale(1.2);
  }
`;
