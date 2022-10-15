import dbConnect from '../../utils/dbConnect';
import Product from '../../models/Product';

import { ProductItemScreen } from '../../screens/ProductItemScreen';

export async function getServerSideProps({ params }) {
  await dbConnect();

  const result = await Product.find();
  const products = result.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();

    return product;
  })

  const product = await Product.findById(params.id).lean();
  product._id = product._id.toString();

  return {
    props: {product, products}
  }
}


export default ProductItemScreen;