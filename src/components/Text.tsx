import {
  ICursor,
  IDisplay,
  ITextAlign,
  ITextElementType,
  IWhiteSpace,
  IWordBreak,
} from "@/types/componentTypes";
import { ComponentPropsWithoutRef } from "react";
import { styled } from "styled-components";

interface ITextProp {
  fontSize?: string;
  fontFamily?: string;
  color?: string;
  display?: IDisplay;
  textAlign?: ITextAlign;
  lineHeight?: string;
  letterSpacing?: string;
  wordBreak?: IWordBreak;
  whiteSpace?: IWhiteSpace;
  minHeight?: string;
  backgroundColor?: string;
  margin?: string;
  padding?: string;
  cursor?: ICursor;
  fontWeight?: string;
}

type ICustomTextProps<T extends ITextElementType> = {
  tagName?: T;
};

type IProp<T extends ITextElementType> = ITextProp &
  ComponentPropsWithoutRef<T> &
  ICustomTextProps<T>;

export default function Text<T extends ITextElementType>({
  tagName,
  children,
  ...rest
}: IProp<T>) {
  return (
    <TextComponent {...rest} as={tagName || ("p" as ITextElementType)}>
      {children}
    </TextComponent>
  );
}

const TextComponent = styled.div<ITextProp>`
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-size: ${({ fontSize }) => fontSize};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  min-height: ${({ minHeight }) => minHeight};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
  display: ${({ display }) => display};
  word-break: ${({ wordBreak }) => wordBreak};
  white-space: ${({ whiteSpace }) => whiteSpace};
  cursor: ${({ cursor }) => cursor};
`;
