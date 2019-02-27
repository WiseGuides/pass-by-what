// Pass By What Lab: Level 2
// Rev. 25Feb2019

const ex1 = () => {
  let x = [2,4,6];
  let y = x;
  y.splice(1,0,3);

  const answers = [
    [2,4,6],
    [1,3,2,4,6],
    [2,4,6,1],
    [2,4,6,3],
    [2,3,4,6]
  ]

  // value of x?
  return answers [4]
}

const ex2 = () => {
  let x = {
    firstName: "Susan",
    lastName: "Craig"
  }
  let y = x;
  
  x.lastName = "Davis"
  y.lastName = "Edwards"
  x.lastName = "Franck"
  y.lastName = "Ganderson"

  const answers = [
    "Craig",
    "Davis",
    "Edwards",
    "Franck",
    "Ganderson"
  ]

  // Value of x.lastName?
  return answers[4]
}

const ex3 = () => {
  let x = {
    class: "Advanced JavaScript",
    scores: []
  }
  let y = x;
  y.scores.push('No scores at present')
  x.name = y.scores;

  const answers = [
    "No scores at present",
    [],
    "Advanced JavaScript",
    ["No scores at present"],
    null
  ]

  // Value of x.scores?
  return answers[3]
}

module.exports = { ex1, ex2, ex3 }