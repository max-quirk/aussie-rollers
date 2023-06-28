import { LanguageProvider } from 'contexts/Language/LanguageProvider';
import { ThemeProvider } from 'contexts/Theme/ThemeProvider';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default MyApp;
