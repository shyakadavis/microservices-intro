import ExpressConfig from './express/express.config';
import axios from 'axios';
import 'dotenv/config';
import { handleSingleEvent } from './controllers';

const app = ExpressConfig();
const PORT = process.env.PORT || 8082;

app.listen(PORT, async () => {
  console.log('🍏 Server Running on Port ' + PORT);
  try {
    const res = await axios.get('http://localhost:8085/events');

    for (let event of res.data) {
      console.log('Processing event:', event.type);

      handleSingleEvent(event.type, event.data);
    }
  } catch (error: any) {
    console.log(error.message);
  }
});
