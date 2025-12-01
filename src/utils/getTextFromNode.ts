import { isValidElement, ReactNode } from "react";

// 재귀적으로 텍스트만 추출하는 함수
export const getTextFromReactNode = (node: ReactNode): string => {
  // 1. null, undefined, boolean 처리 (렌더링되지 않는 값)
  if (node === null || node === undefined || typeof node === "boolean") {
    return "";
  }

  // 2. 문자열이나 숫자라면 텍스트로 변환하여 반환
  if (typeof node === "string" || typeof node === "number") {
    return node.toString();
  }

  // 3. 배열인 경우 (Fragment나 배열 렌더링) -> 재귀 호출 후 합침
  if (Array.isArray(node)) {
    return node.map(getTextFromReactNode).join("");
  }

  // 4. React Element인 경우 (<div>, <Component> 등) -> children을 파고듦
  if (isValidElement(node)) {
    // ReactElement의 props 타입을 확신할 수 없으므로, children이 있다고 가정하고 접근
    const { children } = node.props as { children?: ReactNode };
    return getTextFromReactNode(children);
  }

  // 그 외의 경우 (Function 등)
  return "";
};
