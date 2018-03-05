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
        this.handleChange = this.handleChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange(e) {
        let newState = {};

        newState[e.target.name] = e.target.value;
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e, message) {
        e.preventDefault();

        let formData = {
            todoText: this.state.todoText
        };

        fetch('/url', {
            method: 'POST',
            body: new FormData(formData)
        }).then(function () {
            alert('Yeah');
        }, function () {
            alert('POST failed')
        });
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                type="submit"
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSubmit}
            />,
        ];
        return (
            <div id="form">
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
                        onChange={this.handleChange}
                    />
                </Dialog>
            </div>
        )
    }
}

export default AddTodo;