import Anchor from "@/components/Anchor";
import Flex from "@/components/Flex";
import { useThemeSelector } from "@/store/useThemeSelector";
import { styled } from "styled-components";
import Github from "../../public/Github.svg";
import Mail from "../../public/Mail.svg";

export default function Footer() {
  const { theme } = useThemeSelector((v) => v.theme);
  return (
    <FooterWrapper
      style={{
        height: "4rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        bottom: "0",
      }}
      tagName="footer"
    >
      <Anchor href={"https://github.com/khil94"}>
        <Github fill={theme === "dark" ? "white" : "black"} />
      </Anchor>
      <Anchor href={"mailto:khilkhil@naver.com"}>
        <Mail fill={theme === "dark" ? "white" : "black"} />
      </Anchor>
    </FooterWrapper>
  );
}

const FooterWrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.background1};
  border-top: 1px solid ${({ theme }) => theme.palette.border};
`;
