import type { AppProps } from "next/app";
import { ThemeProvider } from "theme/ThemeProvider";
import GlobalStyles from "styles/global";
import { JetBrains_Mono } from "@next/font/google";

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
 

  return (
    <main className={jetBrainsMono.className}>
      <ThemeProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
