import { useState } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Loader } from '../../components/Loader';

import {
  RegisterNewProductContainer,
  RegisterNewProductContentWrapper,
  RegisterNewProductFormWrapper,
  RegisterNewProductInputWrapper,
  PriceAndCategoryWrapper,
  PostMessageModal,
  PostMessageModalContentWrapper,
  SuccessMessage,
  ErrMessage,
} from './style';

export function RegisterNewProductScreen() {
  const [postErrMsg, setPostErrMsg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [postMessage, setPostMessage] = useState(false);
  const [url, setUrl] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');

  const postNewProduct = async (event) => {
    event.preventDefault();

    if(!url || !category || !price || !product || !description){
      setPostErrMsg(true);
    } else {
      setLoading(true);
      await fetch('/api/produtos', {
        body: JSON.stringify({
          imgSrc: url,
          title: product,
          price: price,
          category: category,
          descrition: description
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      
      setLoading(false);
      setPostMessage(true);
      setUrl('');
      setCategory('');
      setPrice('');
      setProduct('');
      setDescription('');
    }
  }

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
        <RegisterNewProductFormWrapper>
          <RegisterNewProductInputWrapper>
            <label htmlFor="url">URL da imagem</label>
            <input 
              type="text" 
              name="url" 
              id="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </RegisterNewProductInputWrapper>
            
          <PriceAndCategoryWrapper>
            <RegisterNewProductInputWrapper>
              <label htmlFor="category">Categoria</label>
              <input 
                type="text" 
                name="category" 
                id="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </RegisterNewProductInputWrapper>

            <RegisterNewProductInputWrapper>
              <label htmlFor="price">Preço</label>
              <input 
                type="text" 
                name="price" 
                id="price"
                placeholder="00,00"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </RegisterNewProductInputWrapper>
          </PriceAndCategoryWrapper>
            
          <RegisterNewProductInputWrapper>
            <label htmlFor="product">Nome do produto</label>
            <input 
              type="text" 
              name="product" 
              id="product"
              required
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </RegisterNewProductInputWrapper>

          <RegisterNewProductInputWrapper>
            <label htmlFor="description">Descrição do produto</label>
            <textarea 
              name="description" 
              id="description"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </RegisterNewProductInputWrapper>
        </RegisterNewProductFormWrapper>
        {postMessage && 
          <PostMessageModal>
            <PostMessageModalContentWrapper>
            <SuccessMessage>
              <h3>Sucesso!</h3>
              <p>Produto adicionado com sucesso!</p>
            </SuccessMessage>
                <Button 
                  showBtn
                  btnStyle='primary'
                  width='100%'
                  title='Ok'
                  onClickFunction={() => setPostMessage(false)}
                />
            </PostMessageModalContentWrapper>
          </PostMessageModal>
        }

        {postErrMsg && 
          <PostMessageModal>
            <PostMessageModalContentWrapper>
              <ErrMessage>
                <h3>Erro</h3>
                <p>* Por favor preencha todos os campos do formulário.</p>
              </ErrMessage>
              <Button 
                  showBtn
                  btnStyle='primary'
                  width='100%'
                  title='Ok'
                  onClickFunction={() => setPostErrMsg(false)}
                />
            </PostMessageModalContentWrapper>
          </PostMessageModal>
        }

        <span>
          <Button
            type='submit'
            size={'100%'}
            showBtn 
            title='Adicionar produto'
            btnStyle='primary'
            onClickFunction={postNewProduct}
          />
        </span>
      </RegisterNewProductContentWrapper>
      
      { loading && <Loader />}
      <Footer />
    </RegisterNewProductContainer>
  );
}