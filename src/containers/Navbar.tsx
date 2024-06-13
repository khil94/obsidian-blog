import Button from "@/components/Button";
import Flex from "@/components/Flex";
import Text from "@/components/Text";
import useTheme from "@/hooks/useTheme";
import Link from "next/link";

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const { toggleTheme } = useTheme();

  return (
    <Flex
      padding="1rem"
      justifyContent="space-between"
      alignItems="center"
      tagName="nav"
    >
      <Link href="/">
        <Flex>
          <img width={36} src="/logo.png" alt="logo" />
          <Text margin="0 1rem">Zidru's blog</Text>
        </Flex>
      </Link>
      <Button
        borderRadius="12px"
        padding="12px"
        color="white"
        onClick={toggleTheme}
      >
        Theme
      </Button>
    </Flex>
  );
}
