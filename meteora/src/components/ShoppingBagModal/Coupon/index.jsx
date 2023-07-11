import {
  CouponContainer
} from './style';

export function Coupon({couponCode, handleCouponChange, isCouponValid, setIsCouponValid}) {
  const handleForm = e => {
    e.preventDefault();

    if (couponCode === 'METEORA10') {
      setIsCouponValid(true);
    } else if (couponCode === '') {
      setIsCouponValid(false);
    } else {
      setIsCouponValid(false);
    }
  }
  return(
    <CouponContainer>
      <form className='input-bttn-wrapper'>
        <input 
          className='input'
          type="text" 
          name="coupon" 
          id="coupon" 
          placeholder="Insira seu cupom"
          value={couponCode}
          onChange={handleCouponChange}
        />
        <button onClick={handleForm} className='button'>ok</button>
      </form>

      {!isCouponValid && 
        <p className='error-message'>Por favor, insira um cupon válido.</p>
      }
    </CouponContainer>

  )
}