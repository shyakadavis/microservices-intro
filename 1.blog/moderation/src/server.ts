import ExpressConfig from './express/express.config';
import 'dotenv/config';

const app = ExpressConfig();
const PORT = process.env.PORT || 8083;

app.listen(PORT, () => console.log('🍏 Server Running on Port ' + PORT));
