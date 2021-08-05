
export default function calculate(calculatorObject, buttonName) {
  switch (buttonName) {
    case '+/-': plusOrMinus();
      break;
    case 'AC': allClear();
      break;
    case '%': reminder();
      break;
    case '÷': divide();
      break;
    case 'x': multiply();
      break;
    case '-': substract();
      break;
    case '+': add();
      break;
    case '=': result();
    default: allClear();
  }
}
