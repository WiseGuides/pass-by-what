// Pass By What Lab Test: Level 2
// Rev. 25Feb2019

const { ex1, ex2, ex3 } = require('./level-2');

test('Ex1 should return [2,3,4,6]', () => {
  expect(ex1()).toEqual([2,3,4,6])
})

test('Ex2 should return "Ganderson"', () => {
  expect(ex2()).toEqual("Ganderson")
})

test('Ex3 should return ["No scores at present"]', () => {
  expect(ex3()).toEqual(["No scores at present"])
})