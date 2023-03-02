import { GlobalStyles } from "@/styles/GlobalStyles";
import { Raleway } from "next/font/google";

const ralewayFont = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  return (
      <>
        <GlobalStyles />
        <main className={ralewayFont.className}>
          <Component {...pageProps} />
        </main>
      </>
    );
}
