import React from 'react';
//import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //todoText: ''
        }
    }

    render() {
        return (
            <div className="todo-list">
                <List >
                    <Subheader>Here will be your todo items</Subheader>
                    <ListItem primaryText="Notifications" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Sounds" leftCheckbox={<Checkbox />} />
                    <ListItem primaryText="Video sounds" leftCheckbox={<Checkbox />} />
                </List>
            </div>
        )
    }
}

export default TodoList;