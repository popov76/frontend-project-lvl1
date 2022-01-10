import getRandomNumber from '../random.js';
import { playGame, maxRoundsCount } from '../index.js';

const header = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumber = 42;

const isPrime = (num) => {
  if (num < 2) return false;
  let divisor = 2;
  while (num % divisor !== 0) {
    divisor += 1;
  }
  return divisor === num;
};

export const getQuestionsAndAnswers = () => {
  const questions = [];
  for (let i = 0; i < maxRoundsCount; i += 1) {
    const number = getRandomNumber(1, maxNumber);
    questions.push([number, (isPrime(number) ? 'yes' : 'no')]);
  }
  return questions;
};

const playPrimeGame = () => {
  playGame(getQuestionsAndAnswers(), header);
};

export default playPrimeGame;
