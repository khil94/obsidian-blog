import { styled } from "styled-components";

interface IProp extends React.HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  cursor?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  backgroundColor?: string;
  maxWidth?: string;
}

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
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ theme }) => theme.palette.text4};
  max-width: ${({ maxWidth }) => maxWidth};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;
