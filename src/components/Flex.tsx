import {
  IAlign,
  ICursor,
  IFlexElementType,
  IJustify,
} from "@/types/componentTypes";
import { ComponentPropsWithoutRef } from "react";
import { styled } from "styled-components";

interface IFlexProps {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  cursor?: ICursor;
  justifyContent?: IJustify;
  alignItems?: IAlign;
  flexDirection?: string;
  backgroundColor?: string;
  maxWidth?: string;
  fontSize?: string;
  flex?: string;
  minHeight?: string;
  minWidth?: string;

  gap?: string;
}

type ICustomFlexProps<T extends IFlexElementType> = {
  tagName?: T;
  style?: IFlexProps;
};
type IProp<T extends IFlexElementType> = ComponentPropsWithoutRef<T> &
  ICustomFlexProps<T>;

export default function Flex<T extends IFlexElementType>({
  tagName,
  style,
  ...props
}: IProp<T>) {
  return (
    <FlexComp
      as={tagName || ("div" as IFlexElementType)}
      style={style}
      {...props}
    />
  );
}

const FlexComp = styled.div<IFlexProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  max-width: ${({ maxWidth }) => maxWidth};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  font-size: ${({ fontSize }) => fontSize};
  flex: ${({ flex }) => flex};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({ minWidth }) => minWidth};
  gap: ${({ gap }) => gap};
`;
