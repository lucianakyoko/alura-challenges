import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
  }
});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

export default Message;