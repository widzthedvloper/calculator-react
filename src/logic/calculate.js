import operate from './operate';

export default function calculate(calculatorObject, buttonName) {
  const myObject = operate(calculatorObject.total, calculatorObject.next, buttonName);
  return myObject;
}
