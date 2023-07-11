import { Coupon } from "../Coupon";

import {
  SubtotalContainer,
} from './styles';

export function Subtotal({
  couponCode,
  freightPrice, 
  amount, 
  discount, 
  isCouponValid, 
  setIsCouponValid,
  handleCouponChange
}) {
  return (
    <SubtotalContainer>
      <div className="coupon-wrapper">
        <p className="text">Tem cupom de desconto?</p>
        <Coupon 
          couponCode={couponCode}
          isCouponValid={isCouponValid}
          setIsCouponValid={setIsCouponValid}
          handleCouponChange={handleCouponChange}
        />
      </div>

      <div className="values-wrapper">
        <div className="item">
          <span>subtotal:</span>
          <span className="value"> R${amount},00</span>
        </div>
        <div className="item">
          <span>desconto:</span>
            <span className="value discount">
            {isCouponValid ? `-R$${discount},00` : 'R$0,00'}
            </span>
        </div>
        <div className="item">
          <span>frete (grátis acima de R$200,00):</span>
          <span className="value">R${freightPrice},00</span>
        </div>
      </div>
    </SubtotalContainer>
  )
}