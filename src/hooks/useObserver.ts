import { useEffect, useState } from "react";

const useObserver = (targetElement: HTMLElement | null) => {
  const [currentId, setCurrentId] = useState("");
  const [headings, setHeadings] = useState<Element[]>([]);

  const handleClickHead = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    window.scrollTo({
      top: el.offsetTop - 100,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!targetElement) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const intersectEntries = entries.filter(
          ({ isIntersecting }) => isIntersecting
        );
        if (intersectEntries.length !== 0) {
          setCurrentId(intersectEntries[0].target.id);
        }
      },
      {
        threshold: 0.95,
        rootMargin: "-70px 0px -70% 0px",
      }
    );

    const headingEls = targetElement.querySelectorAll("h2, h3");
    console.log("heading ELS", headingEls);
    headingEls.forEach((e) => {
      observer.observe(e);
    });
    setHeadings(Array.from(headingEls));
    return () => {
      observer.disconnect();
    };
  }, [targetElement]);

  useEffect(() => {
    console.log("current id has been changed!", currentId);
  }, [currentId]);

  return { currentId, headings, handleClickHead };
};
export default useObserver;
