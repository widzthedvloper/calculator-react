import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let total = Big(numberOne);
  let next = Big(numberTwo);

  function zeroCase() {
    total = '0';
  }

  if (operation === '+') {
    total = total.plus(next);
  } else if (operation === 'AC') {
    total = next;
  } else if (operation === '+/-') {
    next = next.minus(-1);
  } else if (operation === '-') {
    total = total.minus(next);
  } else if (operation === '÷') {
    if (next === 0) {
      zeroCase();
    } else {
      total = total.div(next);
    }
  } else if (operation === 'x') {
    total = total.times(next);
  } else if (operation === '%') {
    if (next === 0) {
      zeroCase();
    } else {
      total = total.mod(next);
    }
  }
  return {
    total, next, operation,
  };
}
