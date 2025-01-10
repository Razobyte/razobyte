import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when the pathname changes
    window.scrollTo(0, 0);

    // Set scroll restoration to manual (done once globally)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
