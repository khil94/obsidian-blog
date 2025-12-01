import { isValidElement, ReactNode } from "react";

// 재귀적으로 텍스트만 추출하는 함수
export const getUniversalText = (
  node: ReactNode | Element | null | undefined
): string => {
  // 1. null, undefined, boolean 처리
  if (!node || typeof node === "boolean") {
    return "";
  }

  // 2. [추가됨] 실제 DOM 요소인 경우 (예: ref.current 또는 document.getElementById)
  // 브라우저 환경이고, node가 HTMLElement 인스턴스라면 내장 텍스트 반환
  if (typeof window !== "undefined" && node instanceof HTMLElement) {
    return node.innerText; // 혹은 node.textContent (숨겨진 텍스트도 가져오려면)
  }

  // 3. 문자열이나 숫자라면 텍스트로 변환
  if (typeof node === "string" || typeof node === "number") {
    return node.toString();
  }

  // 4. 배열인 경우 (React Fragment 등) -> 재귀 호출
  if (Array.isArray(node)) {
    return node.map(getUniversalText).join("");
  }

  // 5. React Element인 경우 (가상돔) -> props.children 파고들기
  if (isValidElement(node)) {
    const { children } = node.props as { children?: ReactNode };
    return getUniversalText(children);
  }

  return "";
};
