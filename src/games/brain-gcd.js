import getRandomNumber from '../random.js';
import { playGame, maxRounds } from '../index.js';

const header = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let al = a;
  let bl = b;
  if (bl > al) {
    bl = al + bl;
    al = bl - al;
    bl -= al;
  }
  return (bl === 0) ? al : gcd(bl, al % bl);
};

export const getQuestions = (numQuestions) => {
  const maxNumber = 25;
  const questions = [];
  for (let i = 1; i <= numQuestions; i += 1) {
    const randomNumber1 = getRandomNumber(1, maxNumber);
    const randomNumber2 = getRandomNumber(1, maxNumber);
    const correctAnswer = gcd(randomNumber1, randomNumber2);
    questions.push([`${randomNumber1} ${randomNumber2}`, String(correctAnswer)]);
  }
  return questions;
};

const playGcdGame = () => {
  playGame(getQuestions(maxRounds), header);
};
export default playGcdGame;
