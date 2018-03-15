/* eslint-disable import/no-named-as-default */
import React from "react";
import PropTypes from "prop-types";
//import { Switch, NavLink, Route } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Paper from "material-ui/Paper";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

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
  componentDidMount() {
    // let listItems = [
    //   {
    //     id: uuid(),
    //     text: "Buy bananas",
    //     checked: true,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: uuid(),
    //     text: "Play tennis",
    //     checked: true,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     id: uuid(),
    //     text: "Play tennis",
    //     checked: true,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ];
    let self = this;
    let listItems = [];
    let getUrl =
      "https://api.backendless.com/DCEDF76D-9662-324E-FF07-3C8BF4BBE100/F1870599-8446-F184-FFF4-DB8A4B81F800/services/TodoItemsService/todo-items";
    fetch(getUrl)
      .then(function (response) {
        //console.log(response.json());
        return response.json();
      })
      .then(function (json) {
        listItems = json;
        self.setState({
          listItems: listItems
        });
      });
  }

  removeItem(id) {
    let deleteUrl =
      "https://api.backendless.com/DCEDF76D-9662-324E-FF07-3C8BF4BBE100/F1870599-8446-F184-FFF4-DB8A4B81F800/services/TodoItemsService/todo-items";
    let self = this;

    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: id
    })
      .then(response => {
        if (response.ok) {
          let newListItems = self.state.listItems.filter(item => {
            if (item.objectId !== id) {
              return item;
            }
          });
          self.setState({
            listItems: newListItems
          });
        } else {
          console.log(response.statusText);
        }
      })
      .catch(error => console.log("error is", error));
  }

  addItem(formData) {
    let postUrl =
      "https://api.backendless.com/DCEDF76D-9662-324E-FF07-3C8BF4BBE100/F1870599-8446-F184-FFF4-DB8A4B81F800/services/TodoItemsService/list-items";

    let self = this;

    fetch(postUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: formData.todoText
      })
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        let newListItems = self.state.listItems;
        newListItems.unshift(json);
        self.setState({
          listItems: newListItems
        });
      })
      .catch(error => console.log("error is", error));
  }

  updateItem(id) {
    let body = {};
    let newListItems = this.state.listItems;
    newListItems.map(item => {
      if (item.objectId === id) {
        body = {
          objectId: id,
          text: item.text,
          checked: !item.checked
        };
      }
    });

    let putUrl =
      "https://api.backendless.com/DCEDF76D-9662-324E-FF07-3C8BF4BBE100/F1870599-8446-F184-FFF4-DB8A4B81F800/services/TodoItemsService/todo-items";
    let self = this;

    fetch(putUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        return response.json();
      })
      .then(json => {
        newListItems.map(item => {
          if (item.objectId === id) {
            item.checked = json.checked;
          }
        });
        self.setState({
          listItems: newListItems
        });
      })
      .catch(error => console.log("error is", error));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <div className="header">
            <img src="images/plan.png" />
          </div>
          <Paper className="paper">

            <AddTodo addItem={this.addItem} />
            <TodoList
              listItems={this.state.listItems}
              removeItem={this.removeItem}
              updateItem={this.updateItem}
            />
          </Paper>
        </div>
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
