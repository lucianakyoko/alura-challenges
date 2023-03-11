import mongoose from 'mongoose';

const TicketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  ticket: {
    type: String,
    required: true
  },
  entryType: {
    type: String,
    required: true
  },
  eventDate: {
    type: String,
    required: true
  }
})

const Ticket = mongoose.models.Ticket || mongoose.model('Ticket', TicketSchema);

export default Ticket;