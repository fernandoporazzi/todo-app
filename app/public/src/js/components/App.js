import React from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <TodoList />
        <Footer />
      </div>
    );
  }
}