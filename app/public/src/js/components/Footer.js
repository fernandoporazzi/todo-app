import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: ['All', 'Active', 'Completed'],
      activeFilter: 0
    };
  }

  getFiltersHTML() {
    var filters = this.state.filters.map((item, index) => {
      var active;
      if (this.state.activeFilter === index) {
        active = 'active';
      } else {
        active = ''
      }
      return (
        <li key={index}>
          <span className={active} onClick={this.handleFilterChange.bind(this, item, index)}>{item}</span>
        </li>
      );
    });

    return filters;
  }

  handleFilterChange(item, index, event) {
    this.setState({activeFilter: index});

    // Update list
  }

  render() {
    var filters = this.getFiltersHTML()

    return (
      <footer className="footer section">
        <ul className="filters">{filters}</ul>
      </footer>
    );
  }
}
