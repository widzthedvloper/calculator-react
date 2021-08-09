import Big from 'big.js';

const preOp = [];
const preNum = [];

export default function operate(numberOne, numberTwo, operation) {
  const op = Number(operation);

  if (Number.isNaN(op)) {
    preOp.push(operation);
  } else {
    preNum.push(op);
  }

  const total = new Big(numberOne);
  const next = new Big(numberTwo);

  console.log(typeof op);
  console.log(preOp);
  console.log(preOp[preOp.length - 1]);
  return {
    total, next, operation,
  };
}
