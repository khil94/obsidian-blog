"use client";

import Flex from "@/components/Flex";
import Loading from "@/components/Loading";

export default function MainLoading() {
  return (
    <Flex
      style={{
        height: "calc(100vh - 9rem)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loading />
    </Flex>
  );
}
