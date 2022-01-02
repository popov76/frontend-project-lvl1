import getRandomNumber from '../random.js';
import { maxRounds, playGame } from '../index.js';

const maxTerms = 10;
const header = 'What number is missing in the progression?';

const getProgression = (firstTerm, numTerms, diff) => {
  const resultArr = [];
  for (let j = 0; j < numTerms; j += 1) {
    resultArr.push(firstTerm + diff * j);
  }
  return resultArr;
};

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const firstTerm = getRandomNumber(1, maxTerms);
    const diff = getRandomNumber(1, maxTerms);
    const numTerms = 5 + getRandomNumber(0, maxTerms);
    const missingTermNum = getRandomNumber(0, numTerms - 1);
    const progressionArray = getProgression(firstTerm, numTerms, diff);
    const anwswer = String(progressionArray[missingTermNum - 1]);
    progressionArray[missingTermNum - 1] = '..';
    const question = progressionArray.join(' ');
    questions.push([question, anwswer]);
  }
  return questions;
};

const playProgressionGame = () => {
  playGame(getQuestions(), header);
};
export default playProgressionGame;
