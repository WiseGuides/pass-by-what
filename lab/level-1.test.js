// Pass By What Lab Test: Level 1
// Rev. 25Feb2019

const { ex1, ex2, ex3, ex4, ex5, ex6 } = require('./level-1');

test('Ex1 should return "hello"', () => {
  expect(ex1()).toBe('hello')
})

test('Ex2 should return 4', () => {
  expect(ex2()).toBe(4);
})

test('Ex3 should return [1,2,3,4]', () => {
  expect(ex3()).toEqual([1,2,3,4]);
})

test('Ex4 should return 4.19', () => {
  expect(ex4()).toEqual(4.19);
})

test('Ex5 should return true',() => {
  expect(ex5()).toEqual(true);
})

test('Ex6 should return ["Hello, world"]',() => {
  expect(ex6()).toEqual(["Hello, world"]);
})

