export default function createIteratorObject(report) {
  const valuesArray = Object.values(report);
  const values = Object.values(valuesArray[0]);
  const array1 = values.flat();
  return array1[Symbol.iterator]();
}
