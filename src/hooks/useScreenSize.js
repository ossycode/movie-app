import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export function useScreenSize() {
  const [matches, setMatches] = useState("");

  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useEffect(() => {
    isDesktop && setMatches("large");
    isTablet && setMatches("medium");
    isMobile && setMatches("small");
  }, [isDesktop, isTablet, isMobile]);

  return { matches };
}
