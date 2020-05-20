import React, { Component } from 'react'

import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

export default class TodoList extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            todos : []
        };

        this.create = this.create.bind(this);
        this.renderTodo = this.renderTodo.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.complete = this.complete.bind(this);
    }

    create(newTodo)
    {
        this.setState(
            {
                todos : [...this.state.todos, newTodo]
            }
        );
    }

    remove(id)
    {
        this.setState(
            {
                todos : this.state.todos.filter( todo => todo.id !== id )
            }
        )
    }

    update(id, newTask)
    {
        const newTodos = this.state.todos.map( todo => {
            if(todo.id === id)
            {
                return {...todo, task: newTask}
            }
            return todo;
        } );

        this.setState( {
            todos : newTodos
        } )
    }

    complete(id)
    {
        const newTodos = this.state.todos.map( todo => {
            if(todo.id === id)
            {
                return {...todo, isDone: !todo.isDone}
            }
            return todo;
        } );

        this.setState({
            todos : newTodos
        })
    }

    renderTodo()
    {
        const todo = this.state.todos.map( todo => 
        <Todo 
            id={todo.id} 
            key={todo.id} 
            task={todo.task}
            removeTodo={this.remove} 
            updateTodo={this.update} 
            completeTodo={this.complete} 
            completed={todo.isDone} 
            />);

        return todo;
    }

    render() {
        return (
            <div className="TodoList">
                
                {this.renderTodo()}

                <NewTodoForm createTodo={this.create} />

            </div>
        )
    }
}