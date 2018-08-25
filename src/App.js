import React, { Component, Fragment } from "react";

class App extends Component {
  state = { list: [] };

  handleChange = newValue => this.setState({ newItem: newValue });
  handleAdd = () => {
    this.state.newItem &&
      this.setState({
        list: [...this.state.list.slice(), this.state.newItem],
        newItem: null
      });
  };
  handleDelete = idx => {
    const newList = this.state.list.slice();
    newList.splice(idx, 1);
    this.setState({ list: newList });
  };
  handleEditClick = idx => {
    this.setState({ isEditing: idx });
  };
  handleSave = idx => {
    const newList = this.state.list.slice();
    newList.splice(idx, 1, this.state.newItem);
    this.setState({ list: newList, isEditing: null });
  };

  render() {
    const { list, isEditing } = this.state;
    return (
      <div>
        <input onChange={e => this.handleChange(e.target.value)} />
        <button onClick={this.handleAdd}>Add Item</button>
        <Items
          list={list}
          isEditing={isEditing}
          onEditClick={this.handleEditClick}
          onDelete={this.handleDelete}
          onChange={this.handleChange}
          onSave={this.handleSave}
        />
      </div>
    );
  }
}

export default App;

const Items = ({
  onEditClick,
  onDelete,
  onChange,
  onSave,
  list,
  isEditing
}) => (
  <ul>
    {list.map((item, idx) => (
      <li key={idx}>
        {item}
        <button onClick={() => onEditClick(idx)}>Edit</button>
        <button onClick={() => onDelete(idx)}>Delete</button>
        {isEditing === idx && (
          <Fragment>
            <input onChange={e => onChange(e.target.value)} />
            <button onClick={onSave}>Save</button>
          </Fragment>
        )}
      </li>
    ))}
  </ul>
);
