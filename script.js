// input string
  // regex it
  // separate number and operator


function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function mult(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

function operate(oper, x, y) {
  if (oper = '+') {
    add(x, y)
  }
  else if (oper = '-') {
    subtract(x, y)
  }
  else if (oper = '*') {
    mult (x, y)
  }
  else if (oper = '/') {
    divide(x, y)
  }
  else {
    return 'error, operator not found!'
  }
}