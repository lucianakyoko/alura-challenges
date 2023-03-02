import { useRouter } from 'next/router';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { ProductItem } from '../../components/ProductItem';
import { ProductList } from '../../components/ProductsList';
import { ProductsSectionUI } from '../../components/UI/ProductsSectionUI';

import {
  AllProductsContainer,
} from './style';

export function AllProducts({products}) {
  const router = useRouter();
  const categoryLink = router.asPath;
  const category = categoryLink.replace(/[/]/g, '');
  const categoryFormated = category.replace(/[-]/g, ' ')
  const categoryProducts = products.filter(product => product.category === categoryFormated)

  return (
    <>
      <Header
        showSearchBar
        productsList={products}
      />

      <AllProductsContainer>
        <ProductsSectionUI
          title={categoryFormated}
        >

        {
          <ProductList
            category={categoryFormated}
            productsList={categoryProducts}
          />
        }

        </ProductsSectionUI>
      </AllProductsContainer>
      <Footer />
    </>
  );
}