import getRandomNumber from '../random.js';
import { maxRoundsCount, playGame } from '../index.js';

const maxTerms = 10;
const maxNum = 7;
const header = 'What number is missing in the progression?';

const getProgression = (firstTerm, numTerms, diff) => {
  const resultArr = [];
  for (let j = 0; j < numTerms; j += 1) {
    resultArr.push(firstTerm + diff * j);
  }
  return resultArr;
};

const getQuestionsAndAnswers = () => {
  const questions = [];
  for (let i = 0; i < maxRoundsCount; i += 1) {
    const firstTerm = getRandomNumber(1, maxNum);
    const diff = getRandomNumber(1, maxNum);
    const numTerms = 5 + getRandomNumber(0, maxTerms - 5);
    const missingTermIndex = getRandomNumber(0, numTerms - 1);
    const progressionArray = getProgression(firstTerm, numTerms, diff);
    const anwswer = String(progressionArray[missingTermIndex]);
    progressionArray[missingTermIndex] = '..';
    const question = progressionArray.join(' ');
    questions.push([question, anwswer]);
  }
  return questions;
};

const playProgressionGame = () => {
  playGame(getQuestionsAndAnswers(), header);
};
export default playProgressionGame;
