const users = [
  { name: "A", age: 20 },
  { name: "B", age: 30 },
];

const obj = {
  a: {
    b: 1,
    c: {
      d: 1,
    },
  },
};

console.table(users);
console.dir(obj);

console.time("LoopTime");
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("LoopTime");
