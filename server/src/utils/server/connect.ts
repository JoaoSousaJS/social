import 'dotenv/config';
import mongoose from 'mongoose';

async function connectDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}