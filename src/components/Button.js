import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, prop, clickHandler }) {
  const handleClick = (e) => clickHandler(e.target.value);
  return (
    <button className={`${className} button`} onClick={handleClick} type="button" value={prop}>
      {prop}
    </button>
  );
}

Button.propTypes = {
  prop: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

Button.defaultProps = {
  prop: 'Add Text please',
};
export default Button;
