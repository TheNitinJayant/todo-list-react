import React, { Component } from 'react'

import { v4 as uuidv4 } from 'uuid';

export default class NewTodoForm extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            task : ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({

            [event.target.name] : event.target.value ,

        });
    }

    handleSubmit(event)
    {
        event.preventDefault();

        this.props.createTodo( { ...this.state, id: uuidv4(), isDone : false } );
        this.setState({
            task : ""
        })
    }

    render() {
        return (
            <div className="NewTodoForm">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">New Todo</label>
                    <input name="task" id="task" type="text" value={this.state.task} onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
