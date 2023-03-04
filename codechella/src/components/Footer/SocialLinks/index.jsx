import { getSocialLinks } from "@/datas/socialLinks";
import { useTheme } from "styled-components";

import {
  SocialLinksWrapper,
} from './style';

export function SocialLinks() {
  const socialLinks = getSocialLinks();
  const theme = useTheme();

  const getIcon = (linkId) => {
    const icon = theme.socialIcons[linkId];
    return icon;
  }

  return (
    <SocialLinksWrapper>
      {socialLinks.map(link => (
        <li key={link.id} className="social-item">
          <a 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            {getIcon(link.id)}
          </a>
        </li>
      ))}
    </SocialLinksWrapper>
  );
}