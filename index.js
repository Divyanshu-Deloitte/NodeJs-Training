import express from 'express';
import bodyparser from 'body-parser';
import { matchList } from './mockData/matches.js';
import { teamList } from './mockData/teams.js';
import matchRoute from './routes/matchRoute.js';
import teamsRoute from './routes/teamsRoute.js';

const app = express();
const PORT = 3000;

app.use(bodyparser.json());

app.use('/matches', matchRoute);

app.use('/teams', teamsRoute);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
