export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = 1;
    const task2 = true;
  }

  return [task, task2];
}
