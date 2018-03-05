/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
//import { Switch, NavLink, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <Paper className="paper">
          <div className="title">Todo List</div>
          <AddTodo></AddTodo>
          <TodoItem></TodoItem>
          <TodoList></TodoList>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
