import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProductItem } from '../../components/ProductItem';

import {
  AllProductsContainer,
} from './style';

export function AllProducts({products}) {
  return (
    <>
      <Header />

      <AllProductsContainer>
        {products.map(product => (
          <ProductItem 
            key={product._id}
            id={product._id}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
          />

        ))}
      </AllProductsContainer>
      <Footer />
    </>
  );
}