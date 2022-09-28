import { ProductItem } from '../ProductItem';
import {
  ProjectListContainer,
} from './style';

export function ProductList() {
  return (
    <ProjectListContainer>
      <ProductItem 
        imgSrc={'https://images.unsplash.com/photo-1620950127852-92592960e363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'} 
        title={'Vader x Pilot'} 
        price={60} 
      />
      <ProductItem 
        imgSrc={'https://images.unsplash.com/photo-1599719500956-d158a26ab3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'} 
        title={'Vader x Pilot'} 
        price={60} 
      />
      <ProductItem 
        imgSrc={'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'} 
        title={'Master Yoda'} 
        price={120} 
      />
      <ProductItem 
        imgSrc={'https://images.unsplash.com/photo-1620950127852-92592960e363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'} 
        title={'Vader x Pilot'} 
        price={60} 
      />
      <ProductItem 
        imgSrc={'https://images.unsplash.com/photo-1599719500956-d158a26ab3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'} 
        title={'Vader x Pilot'} 
        price={60} 
      />
      <ProductItem 
        imgSrc={'https://images.unsplash.com/photo-1601814933824-fd0b574dd592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80'} 
        title={'Master Yoda'} 
        price={120} 
      />
 
    </ProjectListContainer>
  );

}