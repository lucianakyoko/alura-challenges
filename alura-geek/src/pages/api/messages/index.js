import dbConnect from '../../../utils/dbConnect';
import Message from '../../../models/Message';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const messages = await Message.find({});
        res.status(200).json({ success: true, data: messages })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break;
    
      case 'POST':
        try {
          const message = await Message.create(req.body) 
          res.status(201).json({ success: true, data: message })

        } catch (error) {
          res.status(400).json({ success: false, error })
        }
        break;

      default:
        res.status(400).json({ success: false })
        break;
  }
}