/* eslint-disable import/no-named-as-default */
import React from "react";
import PropTypes from "prop-types";
//import { Switch, NavLink, Route } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import uuid from "uuid";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: []
    };
    //this.getList = this.getList.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }
  // TODO: implement get request
  componentWillMount() {
    let listItems = [
      {
        id: uuid(),
        text: "Buy bananas",
        checked: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        text: "Play tennis",
        checked: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuid(),
        text: "Play tennis",
        checked: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    this.setState({
      listItems: listItems
    });
  }

  removeItem(id) {
    let newListItems = this.state.listItems.filter(item => {
      if (item.id !== id) {
        return item;
      }
    });
    this.setState({
      listItems: newListItems
    });
  }

  addItem(form) {
    let newListItems = this.state.listItems;
    newListItems.unshift({
      id: uuid(),
      text: form.todoText,
      checked: false,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    this.setState({
      listItems: newListItems
    });
  }

  updateItem(id) {
    let newListItems = this.state.listItems;
    newListItems.map(item => {
      if (item.id === id) {
        item.checked = !item.checked;
        item.updatedAt = new Date();
      }
    });
    this.setState({
      listItems: newListItems
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Paper className="paper">
          <div className="title">Todo List</div>
          <AddTodo addItem={this.addItem} />
          <TodoList
            listItems={this.state.listItems}
            removeItem={this.removeItem}
            updateItem={this.updateItem}
          />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  //getList: PropTypes.func,
  removeItem: PropTypes.func,
  addItem: PropTypes.func,
  updateItem: PropTypes.func,
  listItems: PropTypes.array
};

export default App;
