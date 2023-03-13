import { GlobalStyles } from "@/styles/GlobalStyles";
import { Raleway } from "next/font/google";
import { borealTheme, summerTheme } from "@/theme";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeToggleButton } from "@/components/ThemeToggleButton";

const ralewayFont = Raleway({
  weight: ['400', '500', '700', '800'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  const boreal = borealTheme();
  const summer = summerTheme();
  const [theme, setTheme] = useState(true);
  const handleTheme = () => setTheme(!theme)

  return (
      <>
        <ThemeProvider theme={theme ? boreal : summer}>
          <GlobalStyles />
          <main className={ralewayFont.className}>
            <Component {...pageProps} />
            <ThemeToggleButton handleTheme={handleTheme} theme={theme} />
          </main>
        </ThemeProvider>
      </>
    );
}
