import express from 'express';
import router from './routes/routes';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(router);

export default app;
