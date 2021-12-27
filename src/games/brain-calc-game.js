import getRandomNumber from '../random.js';

export const getQuestions = (numQuestions) => {
  const maxNumber = 42;
  const operations = ['+', '-', '*'];
  const questions = [];
  for (let i = 1; i <= numQuestions; i += 1) {
    const randomNumber1 = getRandomNumber(0, maxNumber);
    const randomNumber2 = getRandomNumber(0, maxNumber);
    const randomOperation = operations[getRandomNumber(0, 2)];
    const expression = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
    let correctAnswer = 0;
    switch (randomOperation) {
      case '+':
        correctAnswer = randomNumber1 + randomNumber2;
        break;
      case '-':
        correctAnswer = randomNumber1 - randomNumber2;
        break;
      case '*':
        correctAnswer = randomNumber1 * randomNumber2;
        break;
      default:
    }
    questions.push([expression, String(correctAnswer)]);
  }
  return questions;
};

export const header = 'What is the result of the expression?';
