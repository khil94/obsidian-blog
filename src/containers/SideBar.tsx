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
        style={{
          borderRadius: "12px",
          width: "100%",
          justifyContent: "flex-start",
          padding: "1rem",
          cursor: "pointer",
        }}
        className={`category-btn ${selected ? "selected" : ""}`}
      >
        {text}
      </CategoryComp>
    );
  }

  return (
    <SidebarWrapper
      onClick={(e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.className.includes("category-btn")) {
          console.log(target.innerHTML);
          onSelect(target.innerHTML);
        }
      }}
      style={{
        padding: "0 1rem",
        margin: "1rem auto",
        flexDirection: "column",
        gap: "1rem",
        minHeight: "30rem",
        maxHeight: "30rem",
        minWidth: "fit-content",
      }}
      tagName="aside"
    >
      {["전체", ...Array.from(categoryList)].map((v, i) => {
        return v === "전체" ? (
          <CategoryComponent
            key={`category-all`}
            selected={v === category}
            text={`전체`}
          />
        ) : (
          <CategoryComponent
            key={`category-${v}`}
            selected={v === category}
            text={`${v}`}
          />
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
  overflow-y: auto;
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
