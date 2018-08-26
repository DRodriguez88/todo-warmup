import React, { Component, Fragment } from "react";

class App extends Component {
  state = { list: [] };

  handleChange = newValue => this.setState({ newItem: newValue }); //The value of the input is saved to state

  handleAdd = () => {
    //The value saved in state is added to the list in state
    this.setState({
      list: [...this.state.list.slice(), this.state.newItem],
      newItem: null
    });
  };
  handleDelete = () => {}; //Remove an item from the list in state

  handleEditClick = () => {}; //Toggle visibility of #editInput and #saveEditValue

  handleSave = () => {}; //The value saved in state replaces a value in the list in state

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
        <button id="editButton">Edit</button>
        <button id="deleteButton">Delete</button>
        <Fragment>
          <input id="editInput" />
          <button id="saveEditValue">Save</button>
        </Fragment>
      </li>
    ))}
  </ul>
);
