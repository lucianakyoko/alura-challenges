import { PrimaryFooter } from "./PrimaryFooter";
import { SecondaryFooter } from "./SecondaryFooter";

import { 
  FooterContainter,
} from './style';

export function Footer() {
  return(
    <FooterContainter>
      <PrimaryFooter />
      <SecondaryFooter />
    </FooterContainter>
  );
}