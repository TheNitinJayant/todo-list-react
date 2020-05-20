import React, { Component } from 'react';

import './Todo.css';

export default class Todo extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            isEditing : false,
            task: this.props.task
        }

        this.handleRemove = this.handleRemove.bind(this);
        this.toggelForm = this.toggelForm.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.completed = this.completed.bind(this);
    }

    handleRemove()
    {
        this.props.removeTodo(this.props.id);
    }

    handleUpdate(event)
    {
        event.preventDefault();

        this.props.updateTodo(this.props.id, this.state.task);

        this.toggelForm();
    }

    handleChange(event)
    {
        this.setState({

            [event.target.name] : event.target.value ,

        });
    }

    toggelForm()
    {
        this.setState( { isEditing : !this.state.isEditing } );
    }

    completed()
    {
        this.props.completeTodo(this.props.id);
    }

    render() {

        let result;
        if(this.state.isEditing)
        {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate} >
                        <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
                        <button type="submit">Save</button>
                    </form>
                </div>
            );
        }
        else 
        {
            result = (
                <div className="Todo">
                
                    <li onClick={this.completed} ><span className={this.props.completed ? 'completed' : 'not-completed'}>{this.state.task}</span></li>
                    <button type="button" onClick={this.toggelForm} >Edit</button>
                    <button type="button" onClick={this.handleRemove} >Remove</button>

                </div>
            );
        }
        return (
            result
        );
    }
}
