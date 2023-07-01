import { Inter } from "next/font/google";
import { colors } from "./colors";
import { device } from "./devices";

export const interFont = Inter({
  weight: [
    '400',
    '500',
    '700'
  ],
  subsets: ['latin']
});

export const inputPlaceholder = (fontSize, lineHeight) => {
  return `
    color: ${colors.placeholder};
    font-size: ${fontSize}rem;
    font-style: normal;
    font-weight: 400;
    line-height: ${lineHeight}rem;
  `;
}

export const sectionTitle = (color) => {
  return `
    color: ${color === 'white' ? colors.white : colors.text}
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    ${device.laptop} {
      font-size: 3.2rem;
    }
  `;
}

export const textBold = (size) => {
  return `
    font-size: ${size}rem;
    font-style: normal;
    font-weight: 700;
    line-height: 2.3rem;
  `;
}

export const textNormal = (color, size, lineHeight) => {
  return `
    color: ${color === 'white' ? colors.white : colors.text};
    font-size: ${size}rem;
    font-style: normal;
    font-weight: 400;
    line-height: ${lineHeight}rem;
  `;
}

export const headingH6 = (color, size) => {
  return `
    color: ${color === 'white' ? colors.white : colors.text};
    font-size: ${size}rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `;
}