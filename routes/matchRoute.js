import express from 'express';
import {
  addMatch,
  deleteMatch,
  getAllMatches,
  getOneMatch,
  matchByDate,
  updateMatch,
} from '../controller/matchController.js';
const router = express.Router();

router.get('/', (req, res) => getAllMatches(req, res));

router.get('/:id', (req, res) => getOneMatch(req, res));

router.post('/', (req, res) => addMatch(req, res));

router.patch('/:id', (req, res) => updateMatch(req, res));

router.delete('/:id', (req, res) => deleteMatch(req, res));

router.get('/:date', (req, res) => matchByDate(req, res));

export default router;
