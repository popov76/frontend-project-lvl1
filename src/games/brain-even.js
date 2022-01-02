import getRandomNumber from '../random.js';
import { maxRounds, playGame } from '../index.js';

export const header = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

export const getQuestions = () => {
  const maxNumber = 42;
  const questions = [];
  for (let i = 1; i <= maxRounds; i += 1) {
    const randomNumber = getRandomNumber(0, maxNumber);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  return questions;
};

const playEvenGame = () => {
  playGame(getQuestions(), header);
};

export default playEvenGame;
