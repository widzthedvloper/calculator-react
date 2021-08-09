import operate from './operate';

const preop = ['+'];
export default function calculate(calculatorObject, buttonName) {
  let myObject = {};
  const num = Number(buttonName);
  if (Number.isNaN(num)) {
    preop.push(buttonName);
    // eslint-disable-next-line max-len
    myObject = { total: calculatorObject.total, next: ' ', operation: buttonName };
  } else {
    // eslint-disable-next-line max-len
    myObject = operate(calculatorObject.total, buttonName, preop[preop.length - 1]);
  }
  return myObject;
}
