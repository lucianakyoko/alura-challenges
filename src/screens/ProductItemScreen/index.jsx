import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductsList";
import { ProductsSectionUI } from '../../components/UI/ProductsSectionUI';
import { 
  ProductItemScreenContainer,
  ProductItemScreenContentBox,
  ProductItemContentWrapper,
  ProductImageBox,
  ProductItemDetailsWrapper,
} from './style';

export function ProductItemScreen(props) {
  const {
    img,
    productName,
    price,
    description,
    category
  } = props;

  return(
    <ProductItemScreenContainer>
      <Header />

      <ProductItemScreenContentBox>
        <ProductItemContentWrapper>
          <ProductImageBox></ProductImageBox>
          <ProductItemDetailsWrapper>
            <h2>{productName}</h2>
            <span>R$ {price}</span>
            <p>{description}</p>
          </ProductItemDetailsWrapper>
        </ProductItemContentWrapper>

        <ProductsSectionUI title='Produtos similares'>
          <ProductList category={category} />
        </ProductsSectionUI>
      </ProductItemScreenContentBox>

      <Footer />
    </ProductItemScreenContainer>
  );
}