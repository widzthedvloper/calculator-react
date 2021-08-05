import operate from './operate';

export default function calculate(calculatorObject, buttonName) {
  operate(calculatorObject.total, calculatorObject.next, buttonName);
}
