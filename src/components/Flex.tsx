import { IAlign, ICursor, IJustify } from "@/types/componentTypes";
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
}

type IProp = IFlexProps & ComponentPropsWithoutRef<"div">;

export default function Flex({ borderRadius = "6px", ...props }: IProp) {
  return <FlexComp borderRadius={borderRadius} {...props} />;
}

const FlexComp = styled.div<IProp>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
  max-width: ${({ maxWidth }) => maxWidth};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;
