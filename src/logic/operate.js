/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let total = Big(numberOne);
  let next = Big(numberTwo);
  switch (operation) {
    case '+/-': total *= -1; next *= -1;
      break;
    case 'AC': total = 0; next = 0;
      break;
    case '%': total = total.mod(next);
      break;
    case '÷': total = total.div(next);
      break;
    case 'x': total = total.times(next);
      break;
    case '-': total = total.minus(next);
      break;
    case '+': total = total.plus(next);
      break;
    default: total = 0; next = 0;
  }
  return { total, next, operation };
}
