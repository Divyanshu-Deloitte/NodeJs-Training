import express from 'express';
import {
  addTeams,
  deleteTeams,
  updateTeams,
  getTeams,
  getOneTeams,
  topRunScorer,
  topWicketTakers,
} from '../controller/teamsController.js';
const router = express.Router();

router.get('/', (req, res) => getTeams(req, res));

router.get('/:id', (req, res) => getOneTeams(req, res));

router.post('/', (req, res) => addTeams(req, res));

router.patch('/:id', (req, res) => updateTeams(req, res));

router.delete('/:id', (req, res) => deleteTeams(req, res));

router.get('/topScorer/:teamNameRequired', (req, res) =>
  topRunScorer(req, res)
);

router.get('/topwickertaker/:teamNameRequired', (req, res) =>
  topWicketTakers(req, res)
);

export default router;
