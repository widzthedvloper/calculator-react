import React from 'react';
import Button from './Button';

function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className="Group1">
        <Button prop="AC" />
        <Button prop="+/-" />
        <Button prop="%" />
        <Button prop="÷" />
      </div>
      <div className="Group2">
        <Button prop="7" />
        <Button prop="8" />
        <Button prop="9" />
        <Button prop="x" />
      </div>
      <div className="Group3">
        <Button prop="4" />
        <Button prop="5" />
        <Button prop="6" />
        <Button prop="-" />
      </div>
      <div className="Group4">
        <Button prop="1" />
        <Button prop="2" />
        <Button prop="3" />
        <Button prop="+" />
      </div>
      <div className="Group5">
        <Button prop="0" />
        <Button prop="." />
        <Button prop="=" />
      </div>
    </div>
  );
}

export default ButtonPanel;
