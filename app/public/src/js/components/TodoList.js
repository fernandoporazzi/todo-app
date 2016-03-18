import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var todos = this.props.todos.map((obj, index) => {
      return <Todo updateCompletedPercentage={this.props.updateCompletedPercentage} data={obj} key={index} />
    });

    return (
      <main className="main section">
        {todos}
      </main>
    );
  }
}
