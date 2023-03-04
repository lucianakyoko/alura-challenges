import Head from "next/head";
import { Calistoga } from "next/font/google";
import { Header } from "@/components/Header";
import { Banner } from "../Banner/";
import { Footer } from "@/components/Footer";

import {
  PageLayoutContainer,
} from './style.js';

export const calistogaFont = Calistoga({
  weight: ['400'],
  subsets: ['latin']
});

export function PageLayout({pageTitle, heroText, page, children}) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PageLayoutContainer>
        <Header />
        <Banner heroText={heroText} page={page} />

        {children}

        <Footer />
      </PageLayoutContainer>
    </>
  );
}