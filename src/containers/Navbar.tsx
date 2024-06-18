import Anchor from "@/components/Anchor";
import Button from "@/components/Button";
import Flex from "@/components/Flex";
import Text from "@/components/Text";
import useTheme from "@/hooks/useTheme";
import { useThemeSelector } from "@/store/useThemeSelector";
import { styled } from "styled-components";
import Dark from "../../public/dark.svg";
import Light from "../../public/light.svg";

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const { toggleTheme } = useTheme();
  const { theme } = useThemeSelector((v) => v.theme);

  return (
    <NavbarWrapper
      style={{
        padding: "1rem",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "5rem",
      }}
      tagName="nav"
    >
      <Anchor href="/">
        <Flex>
          <img width={36} src="/logo.png" alt="logo" />
          <Text style={{ fontSize: "1.5rem", margin: "0 1rem" }}>
            Zidru's blog
          </Text>
        </Flex>
      </Anchor>
      <ThemeBtn
        style={{
          borderRadius: "12px",
          padding: "12px",
          color: "white",
          border: "none",
        }}
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <Dark width="32" height="32" fill="white" />
        ) : (
          <Light width="32" height="32" />
        )}
      </ThemeBtn>
    </NavbarWrapper>
  );
}

const ThemeBtn = styled(Button)`
  background-color: ${({ theme }) => theme.palette.background1};
`;

const NavbarWrapper = styled(Flex)`
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  backdrop-filter: blur(15px);
  background-color: transparent;
  color: ${({ theme }) => theme.palette.text1};
`;
