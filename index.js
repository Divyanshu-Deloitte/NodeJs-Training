import express from 'express';
import bodyparser from 'body-parser';
import { matchList } from './mockData/matches.js';
import { teamList } from './mockData/teams.js';

const app = express();
const PORT = 3000;

app.use(bodyparser.json());

// get all matches
app.get('/matches', (req, res) => {
  res.status(200).json({
    message: 'data found',
    data: matchList,
  });
});

// get one matches
app.get('/matches/:id', (req, res) => {
  const { id } = req.params;
  const data = matchList.filter((match) => match.matchId === parseInt(id));
  res.json({
    message: data && data.length ? 'data found' : 'match not found',
    data,
  });
});

// add matches
app.post('/matches', (req, res) => {
  const body = req.body;
  matchList.push(body);
  res.json({
    message: 'Match added',
  });
});

// update matches
app.patch('/matches/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  let isFound = false;
  matchList.forEach((match, index) => {
    if (match.matchId === parseInt(id)) {
      matchList[index] = {
        ...match,
        ...body,
      };
      isFound = true;
      return;
    }
  });
  res.json({
    message: isFound ? 'Match updated' : 'Match not found',
  });
});

// get all teams
app.get('/teams', (req, res) => {
  res.status(200).json({
    message: 'data found',
    data: teamList,
  });
});

// get one matches
app.get('/teams/:id', (req, res) => {
  const { id } = req.params;
  const data = teamList.filter((team) => team.teamId === parseInt(id));
  res.json({
    message: data && data.length ? 'data found' : 'team not found',
    data,
  });
});

// add team
app.post('/teams', (req, res) => {
  const body = req.body;
  teamList.push(body);
  res.json({
    message: 'team added',
  });
});

// update teams
app.patch('/teams/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  let isFound = false;
  teamList.forEach((team, index) => {
    if (team.teamId === parseInt(id)) {
      teamList[index] = {
        ...team,
        ...body,
      };
      isFound = true;
      return;
    }
  });
  res.json({
    message: isFound ? 'Team updated' : 'Team not found',
  });
});

app.listen(PORT, () => {
  console.log('listening on port ${PORT}');
});
