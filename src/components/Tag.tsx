import { styled } from "styled-components";

interface ITagProp extends React.HTMLAttributes<HTMLDivElement> {
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
}

type IProp = ICustomTagProp & ITagProp;

export default function Tag({
  cursor = "pointer",
  borderRadius = "18px",
  border = "none",
  fontWeight = "bold",
  content,
  ...props
}: IProp) {
  return (
    <Tg
      cursor={cursor}
      border={border}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      {...props}
    >
      #{content}
    </Tg>
  );
}

const Tg = styled.div<ITagProp>`
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
