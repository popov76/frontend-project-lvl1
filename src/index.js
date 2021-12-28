import readLineSync from 'readline-sync';

export const maxRounds = 3;

export const playGame = (questionsAndAnswers, header) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(header);
  let error = false;
  for (let roundCount = 0; !error && roundCount < maxRounds; roundCount += 1) {
    const [question, correctAnswer] = questionsAndAnswers[roundCount];
    console.log(`Question: ${question}`);
    let answer = readLineSync.question('Your anwser: ');
    answer = String(answer).trim(answer);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      error = true;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    }
  }
  if (!error) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
