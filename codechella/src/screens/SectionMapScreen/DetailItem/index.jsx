import {
  Detail,
  DetailImage
} from './style';

export function DetailItem({detail}) {
  return (
    <Detail>
      <DetailImage image={`/sectionMap/section-map${detail.image}.png`}></DetailImage>
      <h3 className="item_title">{detail.label}</h3>
      <p className="item_text">{detail.text}</p>
    </Detail>
  );
}