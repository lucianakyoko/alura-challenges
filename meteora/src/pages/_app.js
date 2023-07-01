import { GlobalStyles } from "@/styles/GlobalStyles";

export default function App({ Component, pageProps }) {
  return(
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
