import express from 'express';
import logger from 'morgan';
import dotenv from 'dotenv';

const app = express();

dotenv.config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Connected on port: ${port}`);
});

export default app;
