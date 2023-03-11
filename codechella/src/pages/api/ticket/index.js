import dbConnect from "@/utils/dbConnect";
import Ticket from "@/models/Ticket";

export default async function handler(req, res) {
  const {
    query: {id},
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const ticket = await Ticket.findById(id);
        if(!ticket) {
          return res.status(400).json({success: false});
        }
        res.status(200).json({success: true, data: ticket});

      } catch (error) {
        res.status(400).json({success: false, error});
      }
      break;
    
    case 'POST':
      try {
        const ticket = await Ticket.create(req.body) 
        res.status(201).json({ success: true, data: ticket })

      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break;

    default:
      res.status(400).json({ success: false })
      break;
  }
}