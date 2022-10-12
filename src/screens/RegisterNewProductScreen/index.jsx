import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import {
  RegisterNewProductContainer,
  RegisterNewProductContentWrapper,
  RegisterNewProductFormWrapper,
  RegisterNewProductInputWrapper,
  PriceAndCategoryWrapper
} from './style';

export function RegisterNewProductScreen() {
  return (
    <RegisterNewProductContainer>
      <Header 
        btnShow
        btnTitle='Menu administrador'
        btnStyle='secondary'
        btnHref='/dashboard'
        padding='1.6rem'
      />
      
      <RegisterNewProductContentWrapper>
        <h3>Adicionar novo produto</h3>
        <RegisterNewProductFormWrapper action="">
          <RegisterNewProductInputWrapper>
            <label htmlFor="url">URL da imagem</label>
            <input type="text" name="url" id="url"/>
          </RegisterNewProductInputWrapper>
            
          <PriceAndCategoryWrapper>
            <RegisterNewProductInputWrapper>
              <label htmlFor="category">Categoria</label>
              <input type="text" name="category" id="category" />
            </RegisterNewProductInputWrapper>

            <RegisterNewProductInputWrapper>
              <label htmlFor="price">Preço</label>
              <input type="number" name="price" id="price" />
            </RegisterNewProductInputWrapper>
          </PriceAndCategoryWrapper>
            
          <RegisterNewProductInputWrapper>
            <label htmlFor="product">Nome do produto</label>
            <input type="text" name="product" id="product" />
          </RegisterNewProductInputWrapper>

          <RegisterNewProductInputWrapper>
            <label htmlFor="description">Descrição do produto</label>
            <textarea name="description" id="description"></textarea>
          </RegisterNewProductInputWrapper>
        </RegisterNewProductFormWrapper>

        <span>
          <Button 
            size={'100%'}
            showBtn 
            title='Adicionar produto'
            btnStyle='primary'
          />
        </span>
      </RegisterNewProductContentWrapper>

      <Footer />
    </RegisterNewProductContainer>
  );
}