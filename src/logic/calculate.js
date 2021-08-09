import operate from './operate';

export default function calculate(calculatorObject, buttonName) {
  // eslint-disable-next-line max-len
  const myObject = operate(calculatorObject.total, calculatorObject.next, buttonName);
  return myObject;
}
