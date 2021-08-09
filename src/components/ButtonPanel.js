/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  const handleClick = (e) => clickHandler(e);
  return (
    <div className="button-panel">
      <div className="Group1">
        <Button className="AC" prop="AC" clickHandler={handleClick} />
        <Button className="plus-minus" prop="+/-" clickHandler={handleClick} />
        <Button className="mod" prop="%" clickHandler={handleClick} />
        <Button className="div orange" prop="÷" clickHandler={handleClick} />
      </div>
      <div className="Group2">
        <Button className="seven" prop="7" clickHandler={handleClick} />
        <Button className="eight" prop="8" clickHandler={handleClick} />
        <Button className="nine" prop="9" clickHandler={handleClick} />
        <Button className="time orange" prop="x" clickHandler={handleClick} />
      </div>
      <div className="Group3">
        <Button className="four" prop="4" clickHandler={handleClick} />
        <Button className="five" prop="5" clickHandler={handleClick} />
        <Button className="six" prop="6" clickHandler={handleClick} />
        <Button className="minus orange" prop="-" clickHandler={handleClick} />
      </div>
      <div className="Group4">
        <Button className="one" prop="1" clickHandler={handleClick} />
        <Button className="two" prop="2" clickHandler={handleClick} />
        <Button className="three" prop="3" clickHandler={handleClick} />
        <Button className="plus orange" prop="+" clickHandler={handleClick} />
      </div>
      <div className="Group5">
        <Button className="zero" prop="0" clickHandler={handleClick} />
        <Button className="point" prop="." clickHandler={handleClick} />
        <Button className="equal orange" prop="=" clickHandler={handleClick} />
      </div>
    </div>
  );
}

export default ButtonPanel;
