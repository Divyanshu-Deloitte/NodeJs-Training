import { getAllMatchesData } from '../service/matchService.js';

const matchData = getAllMatchesData();

export const getAllMatches = (req, res) => {
  res.status(200).json({
    message: 'data found',
    matchData,
  });
};

export const getOneMatch = (req, res) => {
  const { id } = req.params;
  const data = matchData.filter((match) => match.matchId === parseInt(id));
  res.json({
    message: data && data.length ? 'data found' : 'match not found',
    data,
  });
};

export const addMatch = (req, res) => {
  const body = req.body;
  matchData.push(body);
  res.json({
    message: 'Match added',
  });
};

export const updateMatch = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  let isFound = false;
  matchData.forEach((match, index) => {
    if (match.matchId === parseInt(id)) {
      matchData[index] = {
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
};

export const deleteMatch = (req, res) => {
  const { id } = req.params;
  const index = matchData.findIndex((match) => match.matchId === parseInt(id));
  let isFound = false;
  if (index < 0) {
    isFound = true;
  } else {
    matchData.splice(index, 1);
  }
  res.json({
    message: !isFound ? 'Match removed' : 'Match not found',
  });
};

export const matchByDate = (req, res) => {
  const { date } = req.params;
  let i = -1;
  matchData.forEach((match, index) => {
    if (new Date(match.date).toDateString() === new Date(date).toDateString()) {
      i = index;
      return;
    }
  });
  res.json({
    message: i > -1 ? 'Match Found' : 'Match not found',
    data: i > -1 ? matchData[i] : null,
  });
};
