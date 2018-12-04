const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 5000);
});

console.log("before");

promise
  .then(data => {
    console.log("1", data);
  })
  .catch(err => {
    console.log(err);
  });

console.log("after");
