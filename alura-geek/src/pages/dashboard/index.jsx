import dbConnect from "../../utils/dbConnect";
import Product from '../../models/Product';

// import dbMessageConnect from "../../utils/dbMessageConnect";
import Message from '../../models/Message';

import { AdminDashboardScreen } from "../../screens/AdminDashboardScreen";

export async function getServerSideProps() {
  await dbConnect();
  // await dbMessageConnect();

  const result = await Product.find();
  const products = result.map((doc) => {
    const product = doc.toObject();
    product._id = product._id.toString();

    return product;
  })

  const resultMsg = await Message.find();
  const messages = resultMsg.map((doc) => {
    const message = doc.toObject();
    message._id = message._id.toString();

    return message;
  })

  return { props: {products, messages} }
}


export default AdminDashboardScreen;