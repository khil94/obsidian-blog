import Flex from "@/components/Flex";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / documentHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ProgressFlex
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: ".4rem",
        transition: "width 0.1s ease-out",
        zIndex: 9999,
      }}
    />
  );
}

const ProgressFlex = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.main};
`;
