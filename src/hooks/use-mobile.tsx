import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const checkMobile = () => {
      try {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      } catch (error) {
        console.error("Error checking mobile state:", error);
        setIsMobile(false);
      }
    };

    // Initial check
    checkMobile();

    let mql: MediaQueryList | null = null;
    try {
      mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
      const onChange = () => {
        checkMobile();
      };

      mql.addEventListener("change", onChange);
      return () => {
        if (mql) {
          try {
            mql.removeEventListener("change", onChange);
          } catch (error) {
            console.error("Error removing media query listener:", error);
          }
        }
      };
    } catch (error) {
      console.error("Error setting up media query:", error);
      return;
    }
  }, []);

  return isMobile;
}
