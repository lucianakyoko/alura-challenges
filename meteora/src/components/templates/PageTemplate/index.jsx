import { interFont } from "@/styles/typography";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import {
  PageContainer
} from './styles';

export function PageTemplate({children}) {
  return (
    <PageContainer className={interFont.className}>
      <Header />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </PageContainer>
  );
}