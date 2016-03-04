import React from 'react';
import $ from 'jquery';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.data._id,
      name: this.props.data.name,
      description: this.props.data.description,
      is_completed: this.props.data.is_completed
    };
  }

  handleCompleteChange() {
    fetch('/', {
      method: 'put',
      body: `id=${this.state.id}`,
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.todo);
    })
    .catch((err) => {
      console.log('err', err);
    });

    this.setState({is_completed: !this.state.is_completed});
  }

  render() {
    return (
      <div className="item">
        <div className="item__action">
          <label htmlFor="edit">
            <input type="checkbox" id="edit" />
          </label>
          <label htmlFor="done">
            <input type="checkbox" id="done" checked={this.state.is_completed} onChange={this.handleCompleteChange.bind(this)} />
          </label>
          <label htmlFor="delete">
            <input type="checkbox" id="delete" />
          </label>
        </div>

        <div className="item__content">
          <h1>{this.state.name}</h1>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}
