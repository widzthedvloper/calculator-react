import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const preOp = [];
  if (Number(operation) === 'NaN') {
    preOp.push(operation);
  }

  let total = new Big(numberOne);
  let next = new Big(numberTwo);

  console.log(preOp);
  console.log(preOp[preOp.length - 1]);
  return {
    total, next, operation, previousOp: preOp,
  };
}
