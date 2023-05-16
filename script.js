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

var buttons = document.querySelectorAll('.button-container button');

let displayScreen = document.querySelector('.display-screen h1') 
let numOne = ""
let inputOper = ""
let numTwo = ""
let result = 0

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.textContent == 'C') {
      displayScreen.textContent = ""
      numOne = ""
      inputOper = ""
      numTwo = ""
      result = 0
    } else if (inputOper == "" && /\d/.test(button.textContent)) {
      numOne+= button.textContent;
      displayScreen.textContent = numOne;
    } 
    else if (/[x:+-]/ig.test(button.textContent)) {
      displayScreen.textContent = ""
      inputOper = button.textContent
    }
    else if (button.textContent == "=" && numTwo != "" && inputOper != "") {
      displayScreen.textContent = ""
      console.log(button.textContent)
    }
    else if (numOne != "" && inputOper != "" && button.textContent != "=") {
      displayScreen.textContent = ""
      numTwo+= button.textContent;
      displayScreen.textContent = numTwo
    }
    console.log("numOne: " + numOne, "oper: " + inputOper, "numTwo: " + numTwo)
  });
});



// input number from above button
// display said number in the display screen
// when you click the operator, store number into a var
// once you click number again after operator, you input a number again
// once you click equal it will store the last number to another var and then calculate the results

