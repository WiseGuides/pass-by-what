// Pass By What Lab: Level 3
// Rev. 25Feb2019

const ex1 = () => {
  let x = [7,2,4,3,6,8];
  let y = x;
  x = y;
  y[1] = x[1];
  x[4] = y[4];

  let [ first, second, third, fourth, fifth, sixth ] = y;
  let sum = first + second + third + fourth + fifth + sixth;

  first = 9;
  second = 8;
  third = 7;
  fourth = 6;
  fifth = 5;
  sixth = 4;

  // Value of sum?
  return 30;
}

const ex2 = () => {
  let x = ex1();
  let y = {
    sum: x
  }
  x = {
    sum: y.sum
  }
  // Value of x.sum?
  return 30;
}

const ex3 = () => {
  let x = {
    "true": false,
    "false": true
  }
  let { "true":bool } = x;
  // Value of "true"?
  return false;
}
module.exports = { ex1, ex2, ex3 }