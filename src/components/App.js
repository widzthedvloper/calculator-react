import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

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
