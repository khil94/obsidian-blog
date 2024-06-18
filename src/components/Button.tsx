import { ComponentPropsWithoutRef } from "react";
import { styled } from "styled-components";

interface IButtonProp {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  cursor?: string;
  border?: string;
  justifyContent?: string;
  backgroundColor?: string;
}

interface ICustomBtnProp {
  style?: IButtonProp;
}

type IProp = ICustomBtnProp & ComponentPropsWithoutRef<"button">;

export default function Button({ style, ...props }: IProp) {
  return <Btn style={style} {...props} />;
}

const Btn = styled.button<IButtonProp>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor || "pointer"};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "6px")};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? backgroundColor : theme.palette.main};
  color: ${({ color, theme }) => (color ? color : theme.palette.text1)};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border: ${({ border }) => (border ? border : "none")};
`;
