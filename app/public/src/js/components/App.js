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

  updateCompletedPercentage(data) {
    this.setState({completedPercentage: data.completedPercentage});
    this.setState({todos: data.todos});
  }

  render() {
    return (
      <div>
        <Header todos={this.state.todos} completedPercentage={this.state.completedPercentage} />
        <TodoList updateCompletedPercentage={this.updateCompletedPercentage.bind(this)} todos={this.state.todos} />
        <Footer />
      </div>
    );
  }
}
