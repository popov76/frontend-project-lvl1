import readLineSync from 'readline-sync';
import getName from './welcome.js';

export const maxRounds = 3;

const playRound = (question) => {
  let error = false;
  const correctAnswer = question[1];
  console.log(`Question: ${question[0]}`);
  let answer = readLineSync.question('Your anwser: ');
  answer = String(answer).trim(answer);
  if (answer === correctAnswer) {
    console.log('Correct');
  } else {
    error = true;
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
  }
  return error;
};
export const playGame = (questions, header) => {
  const playerName = getName();
  console.log(header);
  let error = false;
  let roundCount = 0;
  do {
    error = playRound(questions[roundCount]);
    roundCount += 1;
  } while (!error && roundCount < maxRounds);
  if (!error) {
    console.log(`Congratulations, ${playerName}`);
  } else {
    console.log(`Let's try again, ${playerName}`);
  }
};
