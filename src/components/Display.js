import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result, next, operation } = props;
  return (
    <div className="display">
      <span className="result">{result}</span>
      <span>{operation}</span>
      <span>{next}</span>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = { result: '0', next: '0', operation: '0' };

export default Display;
