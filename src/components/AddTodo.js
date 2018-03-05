import React from 'react';
//import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui/svg-icons/content/add-circle';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            todoText: ''
        }
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        return (
            <div>
                <FlatButton
                    className="add-button"
                    label="Add item"
                    labelPosition="before"
                    primary={true}
                    icon={<AddIcon />}
                    onClick={this.handleOpen}
                />
                <Dialog
                    title="Enter your Todo item"
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <TextField
                        hintText="Message Field"
                        floatingLabelText="What to remember?"
                        fullWidth={true}
                    />
                </Dialog>
            </div>
        )
    }
}

export default AddTodo;