export type ITextElementType =
  | "p"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "a";

export type IFlexElementType =
  | "a"
  | "div"
  | "section"
  | "ul"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "nav";

export type IDisplay =
  | "block"
  | "inline-block"
  | "none"
  | "flex"
  | "grid"
  | "hidden";

export type ITextAlign = "left" | "right" | "center" | "start" | "end";

export type IWordBreak = "normal" | "break-all" | "keep-all" | "break-word";

export type IWhiteSpace =
  | "normal"
  | "nowrap"
  | "pre"
  | "pre-wrap"
  | "pre-line"
  | "break-spaces";

export type ICursor = "default" | "pointer";

export type IAlign = "center" | "start" | "end" | "flex-start" | "flex-end";

export type IJustify =
  | IAlign
  | "left"
  | "right"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "center";
