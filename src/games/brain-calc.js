import getRandomNumber from '../random.js';
import { maxRounds, playGame } from '../index.js';

const header = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (number1, number2, operation) => {
  let answer;
  switch (operation) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      throw new Error(`unknown operation code ${operation}`);
  }
  return answer;
};

const getQuestions = (numQuestions) => {
  const maxNumber = 42;
  const questions = [];
  for (let i = 1; i <= numQuestions; i += 1) {
    const randomNumber1 = getRandomNumber(0, maxNumber);
    const randomNumber2 = getRandomNumber(0, maxNumber);
    const randomOperation = operations[getRandomNumber(0, 2)];
    const expression = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    const correctAnswer = calculate(randomNumber1, randomNumber2, randomOperation);
    questions.push([expression, String(correctAnswer)]);
  }
  return questions;
};

const playCalcGame = () => {
  playGame(getQuestions(maxRounds), header);
};

export default playCalcGame;
