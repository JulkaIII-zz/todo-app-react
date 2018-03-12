import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let todoList = this.props.listItems.map(item => {
      return (
        <TodoItem
          key={item.id}
          itemText={item.text}
          removeItem={this.props.removeItem}
          updateItem={this.props.updateItem}
          id={item.id}
          checked={item.checked}
        />
      );
    });
    return <div className="todo-list">{todoList}</div>;
  }
}

TodoList.propTypes = {
  removeItem: PropTypes.func,
  updateItem: PropTypes.func,
  listItems: PropTypes.array
};

export default TodoList;
