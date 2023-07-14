import { getAllTeams } from '../service/teamsService.js';

const teamData = getAllTeams();

export const getTeams = (req, res) => {
  res.status(200).json({
    message: 'data found',
    teamData,
  });
};

export const getOneTeams = (req, res) => {
  const { id } = req.params;
  const data = teamData.filter((team) => team.teamId === parseInt(id));
  res.json({
    message: data && data.length ? 'data found' : 'team not found',
    data,
  });
};

export const addTeams = (req, res) => {
  const body = req.body;
  teamData.push(body);
  res.json({
    message: 'Team added',
  });
};

export const updateTeams = (req, res) => {
  const { id } = req.params;
  const body = req.body;
  let isFound = false;
  teamData.forEach((team, index) => {
    if (team.teamId === parseInt(id)) {
      teamData[index] = {
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
};

export const deleteTeams = (req, res) => {
  const { id } = req.params;
  const index = teamData.findIndex((team) => team.teamId === parseInt(id));
  let isFound = false;
  if (index < 0) {
    isFound = true;
  } else {
    teamData.splice(index, 1);
  }
  res.json({
    message: !isFound ? 'Team removed' : 'Team not found',
  });
};

export const topRunScorer = (req, res) => {
  const { teamNameRequired } = req.params;
  let playerList = [];
  let runs = -1;
  teamData.forEach((team) => {
    if (team.teamName === teamNameRequired) {
      team.players.forEach((player, index) => {
        if (player.runsScored === runs) {
          playerList.push(player);
        } else if (player.runsScored > runs) {
          playerList = [];
          playerList.push(player);
          runs = player.runsScored;
        }
      });
    }
    return;
  });
  res.json({
    message: playerList.length > 0 ? 'Players found' : 'Team not found',
    data: playerList.length > 0 ? playerList : null,
  });
};

export const topWicketTakers = (req, res) => {
  const { teamNameRequired } = req.params;
  let playerList = [];
  let wickets = -1;
  teamData.forEach((team) => {
    if (team.teamName === teamNameRequired) {
      team.players.forEach((player, index) => {
        if (player.wicketsTaken === wickets) {
          playerList.push(player);
        } else if (player.wicketsTaken > wickets) {
          playerList = [];
          playerList.push(player);
          wickets = player.wicketsTaken;
        }
      });
    }
    return;
  });
  res.json({
    message: playerList.length > 0 ? 'Players found' : 'Team not found',
    data: playerList.length > 0 ? playerList : null,
  });
};
