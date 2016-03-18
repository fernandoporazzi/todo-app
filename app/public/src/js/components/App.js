import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completedPercentage: window._sharedData.completedPercentage,
      todos: window._sharedData.todos,
      filterType: 0
    };
  }

  updateCompletedPercentage(data) {
    this.setState({completedPercentage: data.completedPercentage});
    this.setState({todos: data.todos});
  }

  updateFilter(filterType) {
    this.setState({filterType: filterType});
  }

  render() {
    return (
      <div>
        <Header todos={this.state.todos} completedPercentage={this.state.completedPercentage} />
        <TodoList updateCompletedPercentage={this.updateCompletedPercentage.bind(this)} filterType={this.state.filterType} todos={this.state.todos} />
        <Footer updateFilter={this.updateFilter.bind(this)} />
      </div>
    );
  }
}
