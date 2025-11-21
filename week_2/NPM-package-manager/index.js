import _ from 'lodash';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = _.filter(arr, (num) => num % 2 === 0);
const shuffled = _.shuffle(arr);
const max = _.max(arr);

console.log('evens: ', evens);
console.log('shuffled: ', shuffled);
console.log('max: ', max);
