import React, { Component } from 'react';

class RightSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tags: [],
    };
  }

  render() {
    return (
        <div className="right-section">Right</div>
    );
  }
}

export default RightSection;