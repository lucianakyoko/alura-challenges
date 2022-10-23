import dbConnect from "../../../utils/dbConnect";
import Message from "../../../models/Message";

export default async function handler(req, res) {
  const {
    query: {id},
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const message = await Message.findById(id);
        if(!message) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: message});

      } catch (error) {
        res.status(400).json({success: false, error});
      }
      break;

    case 'PUT':
      try {
        const message = await Message.findByIdAndUpdate(id, req.body, {new: true, runValidators: true});
        if(!message) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: message});

      } catch (error) {
        res.status(400).json({success: false});
      }
      break;
    
    case 'DELETE':
      try {
        const deletedMessage = await Message.deleteOne({_id: id});
        if(!deletedMessage) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data:{}});
      } catch (error) {
        res.status(400).json({success: false});
      }
      break;

    default: 
      res.status(400).json({success: false});
      break;
  }
}