import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completedPercentage: window._sharedData.completedPercentage,
      todos: window._sharedData.todos
    };
  }

  render() {
    return (
      <div>
        <Header completedPercentage={this.state.completedPercentage} />
        <TodoList todos={this.state.todos} />
        <Footer />
      </div>
    );
  }
}