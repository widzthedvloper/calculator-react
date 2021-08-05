/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
// I think i'm going to use the calculatorObject as a prop or state in the next milestone
const calculatorObject = {
  total: 0,
  next: 0,
  operation: '',
};

function AppComponent() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
}

export default AppComponent;
