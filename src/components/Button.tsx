import { styled } from "styled-components";

interface IProp extends React.HTMLAttributes<HTMLButtonElement> {
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

export default function Button({
  cursor = "pointer",
  borderRadius = "6px",
  border = "none",
  ...props
}: IProp) {
  return (
    <Btn
      cursor={cursor}
      border={border}
      borderRadius={borderRadius}
      {...props}
    />
  );
}

const Btn = styled.button<IProp>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.palette.main};
  color: ${({ color, theme }) => color || theme.palette.text1};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border: ${({ border }) =>
    border === "none" ? "none" : `1px solid ${border}`};
`;
