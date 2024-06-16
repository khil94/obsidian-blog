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
        margin="1rem auto"
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
      padding="2rem"
      flexDirection="column"
      tagName="aside"
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
  // background-color: ${({ theme }) => theme.palette.background1};
  ${({ theme }) => theme.device.laptop} {
    display: none;
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
