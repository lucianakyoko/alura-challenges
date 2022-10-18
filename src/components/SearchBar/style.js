import styled from "styled-components";
import { colors } from "../../styles/colors";

export const SearchBarContainer = styled.div`
  display: none;

  &.show-searchbar {
    display: block;
  }
`;

export const SmallInput = styled.div`
  display: block;
  
  span:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 767px) {
    display: none;
  }
`;

export const VisibleInput = styled.div`
  width: 100%;
  position: absolute;
  top: 6rem;
  left: 0;
  z-index: 1;

  display: flex;
  justify-content: flex-end;
  background-color: ${colors.primary.white100};
  padding: 1.2rem 1.6rem;
`;

export const InputAndBtnWrapper =  styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: relative;

  input {
    width: 100%;
    max-width: 40rem;
    padding: 1.2rem;
    
    background-color: ${colors.primary.black05};
    border-radius: 2rem;
    border: none;
    border-bottom: 1px solid ${colors.primary.black05};
    
    transition: all .4s ease;
    &:focus {
      outline: none;
      border-bottom: 1px solid ${colors.primary.black30};
    }
    &:hover {
      border-bottom: 1px solid ${colors.primary.black30};
    }
  }

  span {
    position: absolute;
    right: 1.2rem;
  }
`;

export const BigInput = styled.div`
  display: none;
  
  @media screen and (min-width: 767px) {
    margin-left: 2rem;
    
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 27.2rem;
      padding: 1.2rem 4.8rem 1.2rem 1.6rem;
      background-color: ${colors.primary.black05};

      border: none;
      border-radius: 2rem;
      border-bottom: 1px solid ${colors.primary.black05};
      
      color: ${colors.primary.black50};
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;
      
      &:focus {
        outline: none;
        
        border-bottom: 1px solid ${colors.primary.black30};
        border-radius: 2rem;
      }
      
      &:hover {
        border-bottom: 1px solid ${colors.primary.black30};
      }
    }
    
    span {
      position: absolute;
      right: 1.2rem;
    }
  }

  @media screen and (min-width: 900px) {
    input {
      width: 39.3rem;
    }
  }
`;

export const DataResultWrapper = styled.ul`
  width: 32rem;
  max-width: 40rem;
  height: 16rem;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  top: 5.4rem;
  right: 8.6rem;
  z-index: 1;
  
  background-color: ${colors.primary.white100};
  border: 1px solid ${colors.primary.black05};
  border-radius: 0 0 .4rem .4rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    width: 100%;

    list-style: none;
    
    &:hover {
      cursor: pointer;
      background-color: ${colors.primary.black05};
    }
    
    a {
      display: block;
      width: 100%;
      padding: 1.2rem 1.6rem;

      text-decoration: none;

      color: ${colors.primary.black100};
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }

  @media screen and (min-width: 767px) {
    right: 0rem;
    width: 26rem;
  }

  @media screen and (min-width: 900px) {
    width: 40rem;
  }
`;
