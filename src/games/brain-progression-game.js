const magicNumber = 10;

const getRandomNumber = (min, max) => Math.floor(min + Math.random() * (max - min));

export const getQuestions = (numQuestions) => {
  const questions = [];
  for (let i = 0; i < numQuestions; i += 1) {
    const firstTerm = getRandomNumber(1, magicNumber);
    const diff = getRandomNumber(1, magicNumber);
    const numTerms = 5 + getRandomNumber(0, magicNumber);
    const missingTermNum = getRandomNumber(0, numTerms - 1);
    let resultString = '';
    let missingTerm = firstTerm;
    for (let j = 0; j < numTerms; j += 1) {
      const currentTerm = firstTerm + diff * j;
      if (j === missingTermNum) {
        resultString = `${resultString} ..`;
        missingTerm = currentTerm;
      } else {
        resultString = `${resultString} ${currentTerm}`;
      }
    }
    questions.push([resultString.trim(), String(missingTerm)]);
  }
  return questions;
};

export const header = 'What number is missing in the progression?';
