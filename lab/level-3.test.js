// Pass By What Lab Test: Level 3
// Rev. 25Feb2019

const { ex1, ex2, ex3 } = require('./level-3');

test('Ex1 should return 30', () => {
  expect(ex1()).toBe(30);
})

test('Ex2 should return 30', () => {
  expect(ex2()).toBe(30);
})

test('Ex3 should return false', () => {
  expect(ex3()).toBe(false);
})

