import readLineSync from 'readline-sync';
import * as welcome from './welcome.js';

const isEven = (num) => num % 2 === 0;

const playRound = (maxNumber) => {
  let error = false;
  const randomNumber = Math.round(Math.random() * maxNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const answer = readLineSync.question('Your anwser: ');
  if (answer === correctAnswer) {
    console.log('Correct');
  } else {
    error = true;
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
  }
  return error;
};

const playGame = () => {
  const maxNumber = 42;
  const roundQuantity = 3;
  const playerName = welcome.getName();
  console.log(playerName);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let error = false;
  let roundCount = 0;

  do {
    error = playRound(maxNumber);
    roundCount += 1;
  } while (!error && roundCount < roundQuantity);

  if (!error) {
    console.log(`Congratulations, ${playerName}`);
  } else {
    console.log(`Let's try again, ${playerName}`);
  }
};

export { playGame };
