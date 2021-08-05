/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ prop, clickHandler }) {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <button onClick={handleClick(prop)} className="button" type="button">
      {prop}
    </button>
  );
}

Button.propTypes = {
  prop: PropTypes.string,
};

Button.defaultProps = {
  prop: 'Add Text please',
};
export default Button;
