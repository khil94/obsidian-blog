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
      padding="1rem"
      justifyContent="space-between"
      alignItems="center"
      tagName="nav"
    >
      <Anchor href="/">
        <Flex>
          <img width={36} src="/logo.png" alt="logo" />
          <Text margin="0 1rem">Zidru's blog</Text>
        </Flex>
      </Anchor>
      <ThemeBtn
        borderRadius="12px"
        padding="12px"
        color="white"
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
  background-color: ${({ theme }) => theme.palette.background1};
  color: ${({ theme }) => theme.palette.text1};
`;
