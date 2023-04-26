import { useState, useEffect } from 'react';
import useEventListener from './useEventListener';

export enum MediaQuery {
  isMobile = '(max-width: 47.9375rem)',
  isDesktop = '(min-width: 62rem)',
}

// Hook to utilitise the mediaQuery function of the Window object.
// This will allow use to perform CSS media queries in JavaScript.
// @param {string} query - The media query to use.
function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener('change', (event) => setIsMatch(event.matches), mediaQueryList);
  return isMatch;
}

export default useMediaQuery;
