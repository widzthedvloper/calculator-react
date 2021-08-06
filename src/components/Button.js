/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';

function Button({ prop, clickHandler }) {
  const handleClick = (e) => clickHandler(e.target.value);
  return (
    <button onClick={handleClick} className="button" type="button" value={prop}>
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
