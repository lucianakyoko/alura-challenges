import { useState } from "react";
import { PageTemplate } from "@/components/templates/PageTemplate";
import { Products } from "@/components/Products";
import { Banner } from "./Banner";
import { Categories } from "./Categories";
import { ShoppingBagModal } from "@/components/ShoppingBagModal";
import { BagIconButton } from "@/components/BagIconButton";

import { Facilities } from "./Facilities";
import { NewsLetter } from "./NewsLetter";

import { categoriesList } from "@/datas/categoryList";
import { productList } from "@/datas/productList";
import { facilityList } from "@/datas/facilityList";

import {
  HomeContentContainer,
  SectionWrapper
} from './style';
import { CheckoutModal } from "@/components/ShoppingBagModal/CheckoutModal";

export function HomeScreen({products}) {
  const [modal, setModal] = useState(false);
  const [savedProducts, setSavedProducts] = useState([]);
  const [bagIcon, setBagIcon] = useState(false);
  const [selectCategory, setSelectCategory] = useState(null);
  const [isCheckout, setIsCheckout] = useState(false);

  const handleModal = () => setModal(!modal);
  const handleCheckoutModal = () => setIsCheckout(!isCheckout);
  const addSavedProducts = product => setSavedProducts([...savedProducts, product]);
  const handleBagIcon = () => {
    setBagIcon(!bagIcon);
    handleModal();
  };
  const removeItem = item => {
    const updatedList = savedProducts.filter(product => product !== item);
    setSavedProducts(updatedList);
  }
  const filteredList = productList.filter(item => item.category === selectCategory);
  const currentList = filteredList.length !== 0 ? filteredList : productList;
  
  const handleCheckout = () => {
    handleModal();
    setSavedProducts([]);
    setBagIcon(false);
    setIsCheckout(true)
  }
  return (
    <PageTemplate
      title='Meteora'
      isVisible
      list={productList}
      addSavedProducts={addSavedProducts}
      // list={products}
    >
      <Banner/> 
      <HomeContentContainer>
        <SectionWrapper>
          <section className="section categories">
            <h2 className="section-title">Busque por categorias:</h2>
            <Categories 
              list={categoriesList}
              selectCategory={selectCategory}
              setSelectCategory={setSelectCategory}
            />
          </section>

          <section className="section products">
            <h2 className="section-title">Produtos que estão bombando!</h2>
            <Products 
              // list={products} 
              // list={productList} 
              list={currentList}
              addSavedProducts={addSavedProducts}
            />
          </section>
        </SectionWrapper>

        <section className="section facilities">
          <h2 className="section-title">Conheça todas as nossas facilidades</h2>
          <Facilities list={facilityList} />
        </section>

        <div className="news-letter">
          <NewsLetter />
        </div>

        <BagIconButton 
          bagIcon={bagIcon} 
          handleBagIcon={handleBagIcon}
          itemsInTheBag={savedProducts.length}
        />
        {modal && 
          <ShoppingBagModal 
            list={savedProducts}
            handleModal={handleModal}
            removeItem={removeItem}
            handleCheckout={handleCheckout}
            isCheckout={isCheckout}
            />
          }

        {isCheckout && 
          <CheckoutModal 
            handleModal={handleCheckoutModal}
          />
        }
      </HomeContentContainer>
    </PageTemplate>
  );
}


