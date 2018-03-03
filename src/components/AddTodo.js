import React from 'react';
import PropTypes from 'prop-types';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: ''
        }
    }

    render() {
        return (
            <div>Add todo</div>
        )
    }
}

export default AddTodo;