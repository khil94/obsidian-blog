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
  background-color: ${({ theme }) => theme.palette.main};
  color: ${({ theme }) => theme.palette.text4};
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};
  border: ${({ border }) =>
    border === "none" ? "none" : `1px solid ${border}`};
`;
