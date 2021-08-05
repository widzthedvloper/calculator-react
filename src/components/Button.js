import React from 'react';
import PropTypes from 'prop-types';

function Button({ prop }) {
  return (
    <button className="button" type="button">
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
