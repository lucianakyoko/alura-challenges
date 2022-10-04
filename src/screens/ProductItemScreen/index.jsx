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

export function ProductItemScreen() {
  return(
    <ProductItemScreenContainer>
      <Header />

      <ProductItemScreenContentBox>
        <ProductItemContentWrapper>
          <ProductImageBox></ProductImageBox>
          <ProductItemDetailsWrapper>
            <h2>Nome do produto</h2>
            <span>R$60,00</span>

            <p>
            Voluptas voluptatum quibusdam similique, class debitis alias maecenas eveniet ridiculus, facilis fusce! Ullam conubia? Sociis, minima malesuada habitasse distinctio sequi aliqua malesuada. Quisque deleniti proin expedita, aliquid litora. Iste recusandae? Commodo, quia ridiculus doloribus vero dictum? Penatibus donec placeat faucibus, dolorum do. Animi porta anim magnam
            </p>
          </ProductItemDetailsWrapper>
        </ProductItemContentWrapper>

        <ProductsSectionUI title='Produtos similares'>
          <ProductList />
        </ProductsSectionUI>
      </ProductItemScreenContentBox>

      <Footer />
    </ProductItemScreenContainer>
  );
}