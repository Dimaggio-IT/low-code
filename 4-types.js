'use strict';

const i = 5;
const f = 10.3;
const s = 'Hello';
const b = true;

const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];

const values = {
  name: 'Mouse',
  price: 25,
  stock: false,
  avg: (a, b) => (a + b) / 2n,
  reference: null,
  primitive: undefined,
  numbers: [NaN, Infinity],
};

for (const key in values) {
  const value = values[key];
  const type = typeof value;
  console.log({ key, value, type });
}

console.log('========');
console.log({ i }, typeof i);
console.log({ s }, typeof s);
console.log({ b }, typeof b);
console.log({ f }, typeof f);

console.log('');
console.log({ values }, typeof values);
console.log({ isArray: Array.isArray(values) });

console.log('');
console.log({ cities }, typeof cities);
console.log({ isArray: Array.isArray(cities) });

console.log('');
console.log({ instanceofArray: cities instanceof Array });
