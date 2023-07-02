import {
  ProductItemContainer,
  ProductImage,
  DetailsAndButton
} from './styles';

export function ProductItem({ item }) {
  return(
    <ProductItemContainer>
      <ProductImage img={item.imgSrc}></ProductImage>

      <DetailsAndButton>
        <div className="details">
          <h3 className="title">{item.label}</h3>
          <p className="description">{item.description}</p>
          <span className="price">R${item.price},00</span>
        </div>
        <span className="button">Ver mais</span>
      </DetailsAndButton>
    </ProductItemContainer>
  );
}