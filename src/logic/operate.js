import Big from 'big.js';

export default function operate(numberOne = '0', numberTwo = '0', operation) {
  let total = new Big(numberOne);
  let next = new Big(numberTwo);
  const zeroCase = (ope) => {
    if ((ope === '÷' || ope === '%') && next === 0) {
      total = undefined;
    } else if (ope === '÷' && !next) {
      total = total.div(next);
    } else if (ope === '%' && !next) {
      total = total.mod(next);
    } else if (ope === '%' && numberTwo === 0) {
      total = 0;
    } else if (ope === '÷' && numberTwo === 0) {
      total = 0;
    }
    return {
      total,
      next,
      operation,
    };
  };
  switch (operation) {
    case '+/-': total = total.times(-1); next = next.times(-1);
      break;
    case 'AC': total = 0; next = 0;
      break;
    case '%':
      return zeroCase('%');
    case '÷':
      return zeroCase('÷');
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
