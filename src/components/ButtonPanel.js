/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <div className="button-panel">
      <div className="Group1">
        <Button prop="AC" clickHandler={handleClick} />
        <Button prop="+/-" clickHandler={handleClick} />
        <Button prop="%" clickHandler={handleClick} />
        <Button prop="÷" clickHandler={handleClick} />
      </div>
      <div className="Group2">
        <Button prop="7" clickHandler={handleClick} />
        <Button prop="8" clickHandler={handleClick} />
        <Button prop="9" clickHandler={handleClick} />
        <Button prop="x" clickHandler={handleClick} />
      </div>
      <div className="Group3">
        <Button prop="4" clickHandler={handleClick} />
        <Button prop="5" clickHandler={handleClick} />
        <Button prop="6" clickHandler={handleClick} />
        <Button prop="-" clickHandler={handleClick} />
      </div>
      <div className="Group4">
        <Button prop="1" clickHandler={handleClick} />
        <Button prop="2" clickHandler={handleClick} />
        <Button prop="3" clickHandler={handleClick} />
        <Button prop="+" clickHandler={handleClick} />
      </div>
      <div className="Group5">
        <Button prop="0" clickHandler={handleClick} />
        <Button prop="." clickHandler={handleClick} />
        <Button prop="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

export default ButtonPanel;
