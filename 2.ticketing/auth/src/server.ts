// import { PORT } from './env';
import ExpressConfig from './express/express.config';

const app = ExpressConfig();
const PORT = 3000;
try {
  app.listen(PORT, () => console.log('🍏 Server Running on Port ' + PORT));
} catch (error) {
  console.log(error);
}
