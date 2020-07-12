import * as dotenv from 'dotenv';
import express from 'express';

import router from './router';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(express.json());
app.use('/', router);

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
