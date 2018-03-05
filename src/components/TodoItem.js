import React from 'react';
//import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { pink600 } from 'material-ui/styles/colors'

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //todoText: ''
        }
    }

    render() {
        return (
            <div className="todo-item">
                <ListItem primaryText="Notifications"
                    leftCheckbox={<Checkbox onClick={this.onClick} />}
                    rightIconButton={
                        <IconButton tooltip='remove' tooltipPosition='bottom-right' onClick={this.onClick} iconStyle={{ color: pink600 }}>
                            <DeleteIcon />
                        </IconButton>
                    }
                />
            </div >
        )
    }
}

export default TodoItem;