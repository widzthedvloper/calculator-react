import operate from './operate';

const preop = ['+'];
export default function calculate(calculatorObject, btnName) {
  let myObject = {};
  const num = Number(btnName);

  if (Number.isNaN(num)) {
    preop.push(btnName);
    myObject = { total: calculatorObject.total, next: '0', operation: btnName };
  } else {
    myObject = operate(calculatorObject.total, btnName, preop[preop.length - 1]);
  }
  return myObject;
}
