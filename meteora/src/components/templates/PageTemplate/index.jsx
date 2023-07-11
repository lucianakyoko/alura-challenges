import { interFont } from "@/styles/typography";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  PageContainer
} from './styles';
import Head from "next/head";

export function PageTemplate({title,children, isVisible, list, addSavedProducts}) {
  return (
    <PageContainer className={interFont.className}>
      <Head>
        <title>{title}</title>
      </Head>
      <Header 
        isvisible={isVisible}
        list={list}
        addSavedProducts={addSavedProducts}
      />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </PageContainer>
  );
}