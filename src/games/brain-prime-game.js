import getRandomNumber from '../random.js';

export const header = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const magicNumber = 42;

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
    const num = getRandomNumber(1, magicNumber);
    questions.push([num, (isPrime(num) ? 'yes' : 'no')]);
  }
  return questions;
};
