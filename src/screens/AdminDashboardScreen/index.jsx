import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ToastNotification } from "../../components/ToastNotification";
import { ItemsList } from "./ItemsList";
import { Loader } from '../../components/Loader';

import {
  AdminDashboardScreenContainer,
  AdminDashboardContentWrapper,
  AdminDashboardTitleAndBtnWrapper,
}  from './style';

export function AdminDashboardScreen({products}) {
  const router = useRouter();
  const [toastIsOpen, setToastIsOpen] = useState(true);
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login")
    };
  }, [status]);
  
  if (status === "authenticated") {
    setInterval(() => {
      setToastIsOpen(false);
    }, 3300);

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
  
        <ToastNotification toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
        <Footer />
      </AdminDashboardScreenContainer>
    )
  }
  
  if(status === 'loading') {
    return(
      <Loader />
    )
  }
}