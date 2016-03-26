import React from 'react';
import Ajax from '../utils/Ajax';

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
    var self = this;

    Ajax.put('/', `id=${this.state.id}&is_completed=${!this.state.is_completed}`, function(data) {
      self.setState({is_completed: data.todo.is_completed});
      self.props.update(data);
    });
  }

  handleDeleteChange() {
    var self = this;

    if (this.state.is_completed) {
      return console.log('you can not delete a completed item');
    }

    Ajax.delete(`/${this.state.id}`, '', function(data) {
      self.props.update(data);
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
          <label htmlFor="delete" className="delete">
            <input type="checkbox" id="delete" onChange={this.handleDeleteChange.bind(this)} />
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
