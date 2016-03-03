import React from 'react';
import CircularProgress from './CircularProgress'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header section">
        <CircularProgress strokeWidth="4" radius="55" percentage={this.props.completedPercentage} />
      </header>
    );
  }
}