import getRandomNumber from '../random.js';
import { maxRounds, playGame } from '../index.js';

const maxTerms = 10;
const header = 'What number is missing in the progression?';

const getProgression = (firstTerm, numTerms, diff, missingTermNum) => {
  let resultString = '';
  let missingTerm = firstTerm;
  for (let j = 0; j < numTerms; j += 1) {
    const currentTerm = firstTerm + diff * j;
    if (j === missingTermNum) {
      resultString = `${resultString} ..`;
      missingTerm = currentTerm;
    } else {
      resultString = `${resultString} ${currentTerm}`;
    }
  }
  return [resultString.trim(), String(missingTerm)];
};

const getQuestions = (numQuestions) => {
  const questions = [];
  for (let i = 0; i < numQuestions; i += 1) {
    const firstTerm = getRandomNumber(1, maxTerms);
    const diff = getRandomNumber(1, maxTerms);
    const numTerms = 5 + getRandomNumber(0, maxTerms);
    const missingTermNum = getRandomNumber(0, numTerms - 1);
    questions.push(getProgression(firstTerm, numTerms, diff, missingTermNum));
  }
  return questions;
};

const playProgressionGame = () => {
  playGame(getQuestions(maxRounds), header);
};
export default playProgressionGame;
