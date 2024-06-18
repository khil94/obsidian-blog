import Flex from "@/components/Flex";
import Text from "@/components/Text";
import { categoryList } from "@/utils/category";
import { styled } from "styled-components";

interface IProp {
  category: string;
  onSelect: (T: string) => void;
}

export default function HeadBar({ category, onSelect }: IProp) {
  function CategoryComponent({
    text,
    selected,
  }: {
    text: string;
    selected: boolean;
  }) {
    return (
      <CategoryComp
        margin="1rem auto"
        className={`category-btn ${selected ? "selected" : ""}`}
        padding="1rem"
        borderRadius="12px"
        cursor="pointer"
      >
        {text}
      </CategoryComp>
    );
  }

  return (
    <HeadBarWrapper
      onClick={(e) => {
        if (e.target.className.includes("category-btn")) {
          console.log(e.target.innerHTML);
          onSelect(e.target.innerHTML);
        }
      }}
      gap="1rem"
      margin="1rem auto"
      flexDirection="row"
    >
      {["전체", ...Array.from(categoryList)].map((v, i) => {
        return v === "전체" ? (
          <CategoryComponent selected={v === category} text={`전체`} />
        ) : (
          <CategoryComponent selected={v === category} text={`${v}`} />
        );
      })}
    </HeadBarWrapper>
  );
}

const HeadBarWrapper = styled(Flex)`
  display: none;
  ${({ theme }) => theme.device.laptop} {
    display: flex;
  }
  overflow: auto;
  top: 1rem;
  width: 70%;
  &::-webkit-scrollbar {
    height: 0.5rem;
    background-color: ${({ theme }) => theme.palette.border};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.main};
  }
`;

const CategoryComp = styled(Text)`
  background-color: ${({ theme }) => theme.palette.background1};
  font-weight: 500;
  display: inline;
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.palette.border};
  &:hover,
  &.selected {
    background-color: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.white};
  }
`;
