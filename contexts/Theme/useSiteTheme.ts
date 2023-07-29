import { ThemeOption } from 'constants/themeOption';
import type { ThemeContextType } from 'contexts/theme/ThemeContext';
import { useLayoutEffect, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const userPrefersDarkMode = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
};

export function useSiteTheme(storageKey = 'jb_theme'): ThemeContextType {
  const [currentThemeOption, setCurrentThemeOption] = useState<ThemeOption>(() => {
    if (typeof window !== 'undefined') {
      const storedThemeOption = localStorage.getItem(storageKey);
      if (storedThemeOption) {
        return storedThemeOption as ThemeOption;
      }
    }
    return userPrefersDarkMode() ? ThemeOption.dark : ThemeOption.light;
  });

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  // Set the theme on the body element
  // This is needed for tailwind css dark theme classes to work
  useLayoutEffect(() => {
    if (currentThemeOption === ThemeOption.dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    document.documentElement.style.setProperty('color-scheme', currentThemeOption);
  }, [currentThemeOption]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(storageKey, currentThemeOption);
    }
  }, [currentThemeOption, storageKey]);

  return {
    themeOption: currentThemeOption,
    forThemeOption: map => map[currentThemeOption],
    setThemeOption: (themeOption: ThemeOption) => {
      setCurrentThemeOption(themeOption);
    },
    isMobile,
  };
}
