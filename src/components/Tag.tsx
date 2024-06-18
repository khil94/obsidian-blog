import { ComponentPropsWithoutRef } from "react";
import { styled } from "styled-components";

interface ITagProp {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  cursor?: string;
  border?: string;
  justifyContent?: string;
  backgroundColor?: string;
  fontWeight?: string;
}

interface ICustomTagProp {
  content: string;
  style?: ITagProp;
}

type IProp = ICustomTagProp & ComponentPropsWithoutRef<"div">;

export default function Tag({ style, content, ...props }: IProp) {
  return (
    <Tg style={style} {...props}>
      #{content}
    </Tg>
  );
}

const Tg = styled.div<ITagProp>`
  font-weight: ${({ fontWeight }) => fontWeight || "bold"};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => (cursor ? cursor : "pointer")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "18px"};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.palette.main};
  color: ${({ color, theme }) => (color ? color : theme.palette.white)};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border: ${({ border }) => (border ? border : "none")};
`;
