import React from 'react';
import PropTypes from 'prop-types';

function Display({ prop }) {
  return (
    <div className="display">
      {prop}
    </div>
  );
}

Display.propTypes = {
  prop: PropTypes.string,
};

Display.defaultProps = {
  prop: '0',
};

export default Display;
