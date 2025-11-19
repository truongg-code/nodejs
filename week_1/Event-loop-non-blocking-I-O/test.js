console.log(1);

process.nextTick(() => {
  console.log(2);
});

Promise.resolve().then(() => {
  console.log(3);
});

setImmediate(() => {
  console.log(4);
});

setTimeout(() => {
  console.log(5);
}, 0);

console.log(6);
