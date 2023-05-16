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








function handleKeyDown(event) {
  var key = event.code;

  // Check if the pressed key is a numeric key
  if (/\d/.test(key)) {
      var numericValue = key.slice(-1);
      console.log("Numeric key pressed: " + numericValue);
  }
}

document.addEventListener("keydown", handleKeyDown);
