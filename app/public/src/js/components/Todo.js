import React from 'react';

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
      this.setState({is_completed: data.todo.is_completed});
      this.props.updateCompletedPercentage(data);
    })
    .catch((err) => {
      console.log('err', err);
    });
  }

  render() {
    var itemClass = this.state.is_completed ? 'item__completed' : 'item__not_completed';
    return (
      <div className={`item ${itemClass}`}>
        <div className="item__action">
          <label htmlFor="done" className="done">
            <input type="checkbox" id="done" checked={this.state.is_completed} onChange={this.handleCompleteChange.bind(this)} />
          </label>
          <label htmlFor="edit" className="edit">
            <input type="checkbox" id="edit" />
          </label>
          <label htmlFor="delete" className="delete">
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
