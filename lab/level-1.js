// Pass By What Lab: Level 1
// Rev. 25Feb2019

const ex1 = () => {
  let x = "hello";
  let y = x;
  y = "goodbye";
  
  const answers = [
    "hello",
    "goodbye",
    undefined,
    "hellogoodbye"
  ];
  // Value of x?
  return answers[0];
}

const ex2 = () => {
  let x = 4;
  let y = x;
  x = 3;
  
  const answers = [
    4,
    3,
    7,
    undefined
  ];
  // Value of y?
  return answers[0]
}

const ex3 = () => {
  let x = [1,2,3];
  let y = x;
  y.push(4);

  const answers = [
    [1,2,3],
    [4],
    [1,2,3,4],
    [1,2,4]
  ]
  // Value of x?
  return answers [2]
}

const ex4 = () => {
  let x = {item: 'plastic bags', price: 3.49}
  let y = x;
  y.price = 4.19;

  const answers = [
    3.49,
    4.19,
    0
  ];
  // Value of x.price?
  return answers[1];
}

const ex5 = () => {
  let x = true;
  let y = x;
  y = false;

  const answers = [
    true,
    false,
    null
  ];

  // Value of x?
  return answers[0];
}

const ex6 = () => {
  let x = new Array();
  let y = x;
  y.push('Hello, world');

  const answers = [
    "error: x is undefined",
    [],
    ["Hello, world"],
    [undefined]
  ]

  // Value of x?
  return answers[2];
}
module.exports = { ex1, ex2, ex3, ex4, ex5, ex6 }