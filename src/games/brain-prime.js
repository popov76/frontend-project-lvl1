import getRandomNumber from '../random.js';
import { playGame, maxRounds } from '../index.js';

export const header = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumber = 42;

const isPrime = (num) => {
  let d = 2;
  while (d * d < num && num % d !== 0) {
    d += 1;
  }
  return d * d > num;
};

export const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < maxRounds; i += 1) {
    const number = getRandomNumber(2, maxNumber);
    questions.push([number, (isPrime(number) ? 'yes' : 'no')]);
  }
  return questions;
};

const playPrimeGame = () => {
  playGame(getQuestions(), header);
};

export default playPrimeGame;
