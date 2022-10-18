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

export function ProductItemScreen({product, products}) {
  return(
    <ProductItemScreenContainer>
      <Header
        showSearchBar 
        productsList={products}
      />
      <ProductItemScreenContentBox>
        <ProductItemContentWrapper>
          <ProductImageBox img={product.imgSrc}></ProductImageBox>
          <ProductItemDetailsWrapper>
            <h2>{product.title}</h2>
            <span>R$ {product.price}</span>
            <p>{product.descrition}</p>
          </ProductItemDetailsWrapper>
        </ProductItemContentWrapper>

        <ProductsSectionUI title='Produtos similares'>
          <ProductList  category={product.category} productsList={products}/>
        </ProductsSectionUI>
      </ProductItemScreenContentBox>

      <Footer />
    </ProductItemScreenContainer>
  );
}