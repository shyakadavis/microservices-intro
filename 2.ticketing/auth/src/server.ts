import ExpressConfig from './express/express.config';
import mongoose from 'mongoose';

const app = ExpressConfig();
const PORT = 3000;
const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('🍏 Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
  app.listen(PORT, () => console.log('🍏 Server Running on Port ' + PORT));
};

start();
