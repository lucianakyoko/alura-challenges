import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
  if(connection.isConnected) {
    return;
  }

  const db = mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = mongoose.connection.readyState;
  console.log(connection.isConnected)
}

export default dbConnect;