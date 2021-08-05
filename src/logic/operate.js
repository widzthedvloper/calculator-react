/* eslint-disable no-param-reassign */
import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  switch (operation) {
    case '+/-': Big(numberOne *= -1); Big(numberTwo *= -1);
      break;
    case 'AC': numberOne = 0; numberTwo = 0;
      break;
    case '%': Big(numberOne %= numberTwo);
      break;
    case '÷': Big(numberOne /= numberTwo);
      break;
    case 'x': Big(numberOne *= numberTwo);
      break;
    case '-': Big(numberOne -= numberTwo);
      break;
    case '+': Big(numberOne += numberTwo);
      break;
    default: numberOne = 0; numberTwo = 0;
  }
}
