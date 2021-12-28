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

export const getQuestions = (numQuestions) => {
  const questions = [];
  for (let i = 0; i < numQuestions; i += 1) {
    const num = getRandomNumber(2, maxNumber);
    questions.push([num, (isPrime(num) ? 'yes' : 'no')]);
  }
  return questions;
};

const playPrimeGame = () => {
  playGame(getQuestions(maxRounds), header);
};

export default playPrimeGame;
