const isEven = (num) => num % 2 === 0;

export const getQuestions = (numQuestions) => {
  const maxNumber = 42;
  const questions = [];
  for (let i = 1; i <= numQuestions; i += 1) {
    const randomNumber = Math.round(Math.random() * maxNumber);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    questions.push([randomNumber, correctAnswer]);
  }
  return questions;
};

export const header = 'Answer "yes" if the number is even, otherwise answer "no".';
