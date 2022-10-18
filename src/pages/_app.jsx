import Product from '../models/Product';
import { GlobalStyles } from '../styles/GlobalStyles';
import dbConnect from '../utils/dbConnect';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await Product.find();
  const products = result.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();

    return product;
  })

  return { props: {products} }
}

export default MyApp;


