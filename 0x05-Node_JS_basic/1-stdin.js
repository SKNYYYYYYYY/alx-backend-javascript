const readline = require('readline');

console.log('Welcome to ALX, what is your name?');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdin.isTTY ? process.stdout : undefined,
});

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  rl.close();

  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }
});
