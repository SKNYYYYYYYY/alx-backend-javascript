export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const element of array) {
    const appended = appendString + element;
    array2.push(appended);
  }
  return array2;
}
