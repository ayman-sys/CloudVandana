const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function reverseWords(sentence) {

  const words = sentence.split(" ");


  const reversedWords = words.map((word) => word.split("").reverse().join(""));


  const reversedSentence = reversedWords.join(" ");


  return reversedSentence;
}


rl.question("Enter a sentence: ", (sentence) => {

  const reversedSentence = reverseWords(sentence);
  console.log(reversedSentence);

  
  rl.close();
});
