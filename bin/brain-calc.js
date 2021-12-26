#!/usr/bin/env node
import { getQuestions, header } from '../src/games/brain-calc-game.js';
import { maxRounds, playGame } from '../src/index.js';

playGame(getQuestions(maxRounds), header);
