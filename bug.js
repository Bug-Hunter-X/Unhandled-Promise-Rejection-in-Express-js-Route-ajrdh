const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    // Error handling is missing!  This will cause a crash.
    console.error('Error:', err);
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a possible failure
    const random = Math.random();
    if (random < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});