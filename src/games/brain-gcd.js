import getRandomNumber from '../random.js';
import { playGame, maxRoundsCount } from '../index.js';

const header = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let number1 = a;
  let number2 = b;
  if (number2 > number1) {
    [number1, number2] = [number2, number1];
  }
  return (number2 === 0) ? number1 : gcd(number2, number1 % number2);
};

export const getQuestionsAndAnswers = () => {
  const maxNumber = 25;
  const questions = [];
  for (let i = 1; i <= maxRoundsCount; i += 1) {
    const number1 = getRandomNumber(1, maxNumber);
    const number2 = getRandomNumber(1, maxNumber);
    const correctAnswer = gcd(number1, number2);
    questions.push([`${number1} ${number2}`, String(correctAnswer)]);
  }
  return questions;
};

const playGcdGame = () => {
  playGame(getQuestionsAndAnswers(), header);
};
export default playGcdGame;
