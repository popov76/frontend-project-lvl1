import getRandomNumber from '../random.js';
import { maxRounds, playGame } from '../index.js';

const header = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const calculate = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`unknown operation ${operation}`);
  }
};

const getQuestions = () => {
  const maxNumber = 42;
  const questions = [];
  for (let i = 1; i <= maxRounds; i += 1) {
    const number1 = getRandomNumber(0, maxNumber);
    const number2 = getRandomNumber(0, maxNumber);
    const operation = operations[getRandomNumber(0, operations.length - 1)];
    const expression = `${number1} ${operation} ${number2}`;
    const correctAnswer = calculate(number1, operation, number2);
    questions.push([expression, String(correctAnswer)]);
  }
  return questions;
};

const playCalcGame = () => {
  playGame(getQuestions(), header);
};

export default playCalcGame;
