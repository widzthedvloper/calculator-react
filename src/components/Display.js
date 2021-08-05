/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ButtonPanel from './ButtonPanel';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myState: 'I will display something here later!',
    };
  }

  render() {
    const { myState } = this.state;
    return (
      <div>
        <p>{myState}</p>
        <ButtonPanel />
      </div>
    );
  }
}

export default Display;
