import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }


  render() {
    var todos = [];
    this.props.todos.map((obj, index) => {
      if (this.props.filterType === 0) {
        todos.push(<Todo update={this.props.update} data={obj} key={index} />);
      }

      if (this.props.filterType === 1) {
        if (!obj.is_completed) {
          todos.push(<Todo update={this.props.update} data={obj} key={index} />);
        }
      }

      if (this.props.filterType === 2) {
        if (obj.is_completed) {
          todos.push(<Todo update={this.props.update} data={obj} key={index} />);
        }
      }
    });

    return (
      <main className="main section">
        {todos}
      </main>
    );
  }
}
