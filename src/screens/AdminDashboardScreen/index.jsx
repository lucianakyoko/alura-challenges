import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ItemsList } from "./ItemsList";

import {
  AdminDashboardScreenContainer,
  AdminDashboardContentWrapper,
  AdminDashboardTitleAndBtnWrapper,
}  from './style';

export function AdminDashboardScreen({products}) {

  return(
    <AdminDashboardScreenContainer>
      <Header 
        showSearchBar
        productsList={products}
      />

      <AdminDashboardContentWrapper>
        <AdminDashboardTitleAndBtnWrapper>
          <h3>Todos os produtos</h3>
          <Button 
            showBtn
            href='/adicionar-produto'
            title='Adicionar produto'
            btnStyle='primary'
          />
        </AdminDashboardTitleAndBtnWrapper>

        <ItemsList products={products} />
      </AdminDashboardContentWrapper>

      <Footer />
    </AdminDashboardScreenContainer>
  )
}