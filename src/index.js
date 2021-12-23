import readLineSync from 'readline-sync';
import getName from './welcome.js';

const playRound = (question) => {
  let error = false;
  const correctAnswer = question[1];
  console.log(`Question: ${question[0]}`);
  const answer = readLineSync.question('Your anwser: ');
  if (answer === correctAnswer) {
    console.log('Correct');
  } else {
    error = true;
    console.log(`'${answer}' is wrong answer ;( Correct answer was '${correctAnswer}'`);
  }
  return error;
};
export const playGame = (questions, header) => {
  const numRounds = 3;
  const playerName = getName();
  console.log(header);
  let error = false;
  let roundCount = 0;
  do {
    error = playRound(questions[roundCount]);
    roundCount += 1;
  } while (!error && roundCount < numRounds);
  if (!error) {
    console.log(`Congratulations, ${playerName}`);
  } else {
    console.log(`Let's try again, ${playerName}`);
  }
};

export const maxRounds = 3;
