import express from 'express';
import bodyparser from 'body-parser';
import { matchList } from './mockData/matches.js';

const app = express();
const PORT = 3000;

app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.json(matchList);
});

app.listen(PORT, () => {
  console.log('listening on port ${PORT}');
});
