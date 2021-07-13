import mongoose from 'mongoose';
import { app } from './app';
import 'dotenv/config'

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI not defined')
  }

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000!!');
  });
}

start()