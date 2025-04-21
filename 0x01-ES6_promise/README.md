
---

# ES6 Promise

This folder contains JavaScript examples and exercises related to **ES6 Promises**. Promises are a modern way to handle asynchronous operations in JavaScript, replacing traditional callback-based approaches.

## 📚 Topics Covered

- Creating Promises
- Using `.then()`, `.catch()`, and `.finally()`
- Chaining Promises
- Handling errors in Promises
- Using `Promise.all()` and `Promise.race()`

## 🚀 Getting Started

To run the examples:

1. Make sure you have **Node.js** installed.
2. Clone the repository or navigate to this folder.
3. Run the files using:

```bash
node filename.js
```

## 🛠 Example

```javascript
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received!");
    }, 1000);
  });
};

getData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```
