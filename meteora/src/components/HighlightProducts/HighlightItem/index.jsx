import NextImage from "next/image";

import {
  ItemContainer,
} from './styles';

export function HighlightItem({item}) {
  return (
    <ItemContainer>
      <div className="image">
        <NextImage 
          src={item.imgSrc}
          alt='imagem do produto'
          fill
          sizes="100%"
        />
      </div>
      <div className="details-button">
        <div className="details">
          <h3 className="title">{item.label}</h3>
          <p className="description">{item.description}</p>
          <span className="price">R${item.price},00</span>
        </div>

        <span className="button">Ver mais</span>
      </div>
      
    </ItemContainer>
  );
}