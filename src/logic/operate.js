/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  switch (operation) {
    case '+/-': numberOne *= -1; numberTwo *= -1;
      break;
    case 'AC': numberOne = 0; numberTwo = 0;
      break;
    case '%': numberOne %= numberTwo;
      break;
    case '÷': numberOne /= numberTwo;
      break;
    case 'x': numberOne *= numberTwo;
      break;
    case '-': numberOne -= numberTwo;
      break;
    case '+': numberOne += numberTwo;
      break;
    default: numberOne = 0; numberTwo = 0;
  }
}
