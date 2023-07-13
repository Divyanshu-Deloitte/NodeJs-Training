import express from 'express';
import bodyparser from 'body-parser';
import { matchList } from './mockData/matches.js';
import { teamList } from './mockData/teams.js';

const app = express();
const PORT = 3000;

app.use(bodyparser.json());

app.get('/matches', (req, res) => {
  res.json(matchList);
});

app.get('/teams', (req, res) => {
  res.json(teamList);
});

app.listen(PORT, () => {
  console.log('listening on port ${PORT}');
});
