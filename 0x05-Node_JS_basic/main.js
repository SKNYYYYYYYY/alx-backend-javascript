const { spawn } = require('child_process');

const child = spawn('node', ['1-stdin.js']);

// Send input to the child process
child.stdin.write('John\n');
child.stdin.end(); // signal end of input

// Capture output
child.stdout.on('data', (data) => {
  console.log(`stdout: ${data.toString()}`);
});

child.stderr.on('data', (data) => {
  console.error(`stderr: ${data.toString()}`);
});

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
