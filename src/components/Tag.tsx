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
  fontWeight?: string;
}

export default function Tag({
  cursor = "pointer",
  borderRadius = "18px",
  border = "none",
  fontWeight = "bold",
  ...props
}: IProp) {
  return (
    <Tg
      cursor={cursor}
      border={border}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      {...props}
    />
  );
}

const Tg = styled.div<IProp>`
  font-weight: ${({ fontWeight }) => fontWeight};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.palette.main};
  color: ${({ color, theme }) => color || theme.palette.white};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border: ${({ border }) =>
    border === "none" ? "none" : `1px solid ${border}`};
`;
