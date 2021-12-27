import readLineSync from 'readline-sync';
import * as calc from './games/brain-calc-game.js';
import * as even from './games/brain-even-game.js';
import * as gcd from './games/brain-gcd-game.js';
import * as prime from './games/brain-prime-game.js';
import * as progression from './games/brain-progression-game.js';

export const maxRounds = 3;

const getGameData = (gameType, numRounds) => {
  const gameData = [];
  let questions;
  let header;
  switch (gameType) {
    case 'calc':
      questions = calc.getQuestions(numRounds);
      header = calc.header;
      break;
    case 'even':
      questions = even.getQuestions(numRounds);
      header = even.header;
      break;
    case 'gcd':
      questions = gcd.getQuestions(numRounds);
      header = gcd.header;
      break;
    case 'prime':
      questions = prime.getQuestions(numRounds);
      header = prime.header;
      break;
    case 'progression':
      questions = progression.getQuestions(numRounds);
      header = progression.header;
      break;
    default:
      console.log('unknown game type');
  }
  gameData.push(questions);
  gameData.push(header);
  return gameData;
};

const playRound = (questionAnwser) => {
  let error = false;
  const [question, correctAnswer] = questionAnwser;
  console.log(`Question: ${question}`);
  let answer = readLineSync.question('Your anwser: ');
  answer = String(answer).trim(answer);
  if (answer === correctAnswer) {
    console.log('Correct!');
  } else {
    error = true;
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  }
  return error;
};
export const playGame = (gameType) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  const gameData = getGameData(gameType, maxRounds);
  const [questions, header] = gameData;
  console.log(header);
  let error = false;
  let roundCount = 0;
  for (roundCount = 0; !error && roundCount < maxRounds; roundCount += 1) {
    error = playRound(questions[roundCount]);
  }
  if (!error) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
