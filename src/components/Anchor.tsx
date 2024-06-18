import { ICursor } from "@/types/componentTypes";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import { styled } from "styled-components";

interface IAnchorProps {
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  cursor?: ICursor;
  backgroundColor?: string;
  fontSize?: string;
}

interface ICustomAnchorProp {
  style?: IAnchorProps;
}

type IProp = ICustomAnchorProp & ComponentPropsWithoutRef<typeof Link>;

export default function Anchor({ href, style, ...rest }: IProp) {
  return <LinkAnchor style={style} href={href} {...rest} />;
}

const LinkAnchor = styled(Link)<IAnchorProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.palette.background1};
  font-size: ${({ fontSize }) => fontSize};
`;
