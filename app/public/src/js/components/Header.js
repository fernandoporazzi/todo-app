import React from 'react';
import CircularProgress from './CircularProgress'

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  getCompletedItens() {
    var completedItens = this.props.todos.filter((item) => {
      return item.is_completed;
    });

    return completedItens;
  }

  render() {
    var completedItens = this.getCompletedItens(),
      completedItensLength = completedItens.length,
      remaining = this.props.todos.length - completedItens.length;

    return (
      <header className="header section">
        <CircularProgress strokeWidth="4" radius="55" percentage={this.props.completedPercentage} />
        <div className="header__info">
          <p>
            You have completed a total of <strong>{completedItensLength}</strong> itens.
            You still need to complete more <strong>{remaining}</strong> tasks.
          </p>
        </div>
      </header>
    );
  }
}
