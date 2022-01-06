import getRandomNumber from '../random.js';
import { playGame, maxRounds } from '../index.js';

export const header = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumber = 42;

const isPrime = (num) => {
  if (num < 2) return false;
  let divisor = 2;
  while (divisor * divisor < num && num % divisor !== 0) {
    divisor += 1;
  }
  return divisor * divisor > num;
};

export const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number = getRandomNumber(1, maxNumber);
    questions.push([number, (isPrime(number) ? 'yes' : 'no')]);
  }
  return questions;
};

const playPrimeGame = () => {
  playGame(getQuestions(), header);
};

export default playPrimeGame;
