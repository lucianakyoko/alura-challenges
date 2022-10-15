import dbConnect from "../../utils/dbConnect";
import Product from "../../models/Product";

import { AllProducts } from "../../screens/AllProducts";

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

export default AllProducts;