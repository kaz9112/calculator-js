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
      displayScreen.textContent = "";
      numOne = "";
      inputOper = "";
      numTwo = "";
      result = 0;
    } else if (inputOper == "" && /\d/.test(button.textContent)) {
      numOne+= button.textContent;
      displayScreen.textContent = numOne;
    } 
    else if (/[x:+-]/ig.test(button.textContent) && inputOper == "") {
      displayScreen.textContent = "";
      inputOper = button.textContent;
    }
    else if (button.textContent == "=" && numTwo != "" && inputOper != "") {
      displayScreen.textContent = "";

      if (inputOper == "+") {
        result = add(Number(numOne), Number(numTwo));
        displayScreen.textContent = result
      }
      else if (inputOper == "-") {
        result = subtract(Number(numOne), Number(numTwo));
        displayScreen.textContent = result
      }
      else if (inputOper == "X") {
        result = mult(Number(numOne), Number(numTwo));
        displayScreen.textContent = result
      }
      else if (inputOper == ":") {
        result = divide(Number(numOne), Number(numTwo));
        displayScreen.textContent = result
      }
      numOne = result;
      inputOper = "";
      numTwo = "";

    }
    else if (numOne != "" && inputOper != "" && button.textContent != "=") {
      displayScreen.textContent = "";
      numTwo+= button.textContent;
      displayScreen.textContent = numTwo;
    }
    console.log("numOne: " + numOne, "oper: " + inputOper, "numTwo: " + numTwo);
  });
});
