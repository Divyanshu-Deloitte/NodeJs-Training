import express from 'express';
import bodyparser from 'body-parser';
import { matchList } from './mockData/matches.js';
import { teamList } from './mockData/teams.js';

const app = express();
const PORT = 3000;

app.use(bodyparser.json());

// get all matches
app.get('/matches', (req, res) => {
  res.json(matchList);
});

// add matches
app.post('/matches', (req, res) => {
  const body = req.body;
  matchList.push(body);
  res.json({
    message: 'Match added',
  });
});

// get all teams
app.get('/teams', (req, res) => {
  res.json(teamList);
});

// add team
app.post('/teams', (req, res) => {
  const body = req.body;
  teamList.push(body);
  res.json({
    message: 'team added',
  });
});

app.listen(PORT, () => {
  console.log('listening on port ${PORT}');
});
