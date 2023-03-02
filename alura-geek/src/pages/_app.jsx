import { SessionProvider } from "next-auth/react";
import { GlobalStyles } from '../styles/GlobalStyles';
import Product from '../models/Product';
import dbConnect from '../utils/dbConnect';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <GlobalStyles />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  
  const result = await Product.find();
  const products = result.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();

    return product;
  })

  return { 
    props: {
      products, 
    } 
  }
}

export default MyApp;


