
export const backgroundImage = (blendMode, size) => {
  return `
    background-position: center;
    background-repeat: no-repeat;
    background-size: ${size};
    mix-blend-mode: ${blendMode};
  `;
}