import { Header } from "../../components/Header";
import { Footer } from '../../components/Footer';
import { ProductList } from "../../components/ProductsList";
import { Button } from "../../components/Button";

import {
  AllProductsScreenContainer,
  AllProductsContent,
  TitleAndBtnWrapper
} from './style';

export function AllProductsScreen() {
  return (
    <AllProductsScreenContainer>
      <Header />

      <AllProductsContent >
        <TitleAndBtnWrapper>
          <h3>Todos os produtos</h3>
          <Button 
            showBtn
            href='/adicionar-produto'
            title='Adicionar produto'
            btnStyle='primary'
          />
        </TitleAndBtnWrapper>

        <ProductList isAllowed />
      </AllProductsContent>
      <Footer />
    </AllProductsScreenContainer>
  );
}