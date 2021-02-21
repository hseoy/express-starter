import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json('pick for me api');
});

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`app is runniing on port ${PORT}`);
});
