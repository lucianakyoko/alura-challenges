// import dbMessageConnect from "../../../utils/dbMessageConnect";
import dbConnect from "../../../utils/dbConnect";
import Message from "../../../models/Message";

import { MessageScreen } from "../../../screens/MessageScreen";

export async function getServerSideProps() {
  // await dbMessageConnect();
  await dbConnect();

  const result = await Message.find();
  const messages = result.map((doc) => {
    const message = doc.toObject();
    message._id = message._id.toString();

    return message;
  })

  return { props: {messages} }
}


export default MessageScreen;