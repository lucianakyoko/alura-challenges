import { useState } from "react";
import { ModalTemplate } from "../templates/ModalTemplate";
import { BagItem } from "./BagItem";

import {
  ShoppingBagContainer,
  ShoppingBagList,
} from './styles';
import { Subtotal } from "./Subtotal";

export function ShoppingBagModal({list, handleModal, removeItem, handleCheckout}) {
  const [couponCode, setCouponCode] = useState('');
  const [isCouponValid, setIsCouponValid] = useState(false);

  const getAmount = (total, item) => total + item.price;
  const amount = list.reduce(getAmount, 0);
  const discount = amount * 0.1;
  const freightPrice = (amount - discount) > 200 ? 0 : 20;
  const total = isCouponValid ? amount - discount + freightPrice : amount + freightPrice;
  
  const handleCouponChange = e => setCouponCode(e.target.value);

   return (
    <ModalTemplate
      text='Confira os itens da sua sacola'
      handleModal={handleModal}
    >
      <ShoppingBagContainer>
        <ShoppingBagList>
          {list.map((item, i) => (
            <BagItem key={i} removeItem={removeItem} item={item} />
          ))}
        </ShoppingBagList>
        
        <Subtotal
          freightPrice={freightPrice}
          amount={amount}
          discount={discount}
          isCouponValid={isCouponValid}
          setIsCouponValid={setIsCouponValid}
          handleCouponChange={handleCouponChange}
          couponCode={couponCode}
        />

        <div className="total">
          <p>Total: <span className="price">R${total},00</span></p>
        </div>

        <div className="button-wrapper">
          <span onClick={handleCheckout} className="button">Finalizar compra</span>
        </div>
      </ShoppingBagContainer>
    </ModalTemplate>
  )
}