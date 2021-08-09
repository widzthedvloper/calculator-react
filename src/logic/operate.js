import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  let total = Big(numberOne);
  const next = Big(numberTwo);

  if (operation === '+') {
    total = total.plus(next);
  } else if (operation === '-') {
    total = total.minus(next);
  } else if (operation === '÷') {
    total = total.div(next);
  } else if (operation === 'x') {
    total = total.times(next);
  } else if (operation === '%') {
    total = total.mod(next);
  }
  return {
    total, next, operation,
  };
}
