import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json('express-starter api');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`app is runniing on port ${PORT}`);
});
