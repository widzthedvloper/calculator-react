import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result, next, operation } = props;
  return (
    <div className="display">
      <span>{result}</span>
      <span>{operation}</span>
      <span>{next}</span>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

export default Display;
