import getRandomNumber from '../random.js';
import { maxRoundsCount, playGame } from '../index.js';

const header = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export const getQuestionsAndAnswers = () => {
  const maxNumber = 42;
  const questions = [];
  for (let i = 1; i <= maxRoundsCount; i += 1) {
    const randomNumber = getRandomNumber(0, maxNumber);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  return questions;
};

const playEvenGame = () => {
  playGame(getQuestionsAndAnswers(), header);
};

export default playEvenGame;
