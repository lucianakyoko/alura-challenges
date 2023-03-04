import { GlobalStyles } from "@/styles/GlobalStyles";
import { Raleway } from "next/font/google";
import { borealTheme, summerTheme } from "@/theme";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

const ralewayFont = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  const boreal = borealTheme();
  const summer = summerTheme();
  const [theme, setTheme] = useState(summer);

  return (
      <>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <main className={ralewayFont.className}>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </>
    );
}
