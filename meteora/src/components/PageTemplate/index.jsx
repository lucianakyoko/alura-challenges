import { interFont } from "@/typographies";
import { Header } from "@/components/Header";
import { Footer } from "../Footer";

import {
  PageContainer
} from './styles';

export function PageTemplate({children}) {
  return (
    <PageContainer className={interFont.className}>
      <Header />
      <div className="content">
        {children}
      </div>
      <Footer />
    </PageContainer>
  );
}