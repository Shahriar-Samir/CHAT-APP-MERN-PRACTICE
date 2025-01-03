import express from 'express';
import router from './app/routes/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api', router);

app.use(globalErrorHandler);
app.use(notFound);
export default app;
