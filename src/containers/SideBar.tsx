import Flex from "@/components/Flex";
import { categoryList } from "@/utils/category";
import { styled } from "styled-components";

interface IProp {
  category: string;
  onSelect: (T: string) => void;
}

export default function SideBar({ category, onSelect }: IProp) {
  function CategoryComponent({
    text,
    selected,
  }: {
    text: string;
    selected: boolean;
  }) {
    return (
      <CategoryComp
        borderRadius="12px"
        width="100%"
        className={`category-btn ${selected ? "selected" : ""}`}
        justifyContent="flex-start"
        padding="1rem"
        cursor="pointer"
      >
        {text}
      </CategoryComp>
    );
  }

  return (
    <SidebarWrapper
      onClick={(e) => {
        if (e.target.className.includes("category-btn")) {
          console.log(e.target.innerHTML);
          onSelect(e.target.innerHTML);
        }
      }}
      padding="0 1rem"
      margin="1rem auto"
      flexDirection="column"
      tagName="aside"
      gap="1rem"
    >
      {["전체", ...Array.from(categoryList)].map((v, i) => {
        return v === "전체" ? (
          <CategoryComponent selected={v === category} text={`전체`} />
        ) : (
          <CategoryComponent selected={v === category} text={`${v}`} />
        );
      })}
    </SidebarWrapper>
  );
}

const SidebarWrapper = styled(Flex)`
  ${({ theme }) => theme.device.laptop} {
    display: none;
  }
  position: sticky;
  top: 8rem;
  max-height: 50%;
  overflow-y: auto;
  height: 30rem;

  &::-webkit-scrollbar {
    width: 0.3rem;
    border-radius: 24px;

    background-color: ${({ theme }) => theme.palette.border};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 24px;

    background-color: ${({ theme }) => theme.palette.main};
  }
`;

const CategoryComp = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.background1};
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.palette.border};
  &:hover,
  &.selected {
    background-color: ${({ theme }) => theme.palette.main};
    color: ${({ theme }) => theme.palette.white};
  }
`;
