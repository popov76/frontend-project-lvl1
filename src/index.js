import readLineSync from 'readline-sync';

export const maxRounds = 3;

export const playGame = (questionsAndAnswers, header) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(header);
  for (let roundCount = 0; roundCount < maxRounds; roundCount += 1) {
    const [question, correctAnswer] = questionsAndAnswers[roundCount];
    console.log(`Question: ${question}`);
    const answer = readLineSync.question('Your anwser: ').trim();
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
