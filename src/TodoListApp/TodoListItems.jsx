import React from 'react';
import PropTypes from 'prop-types';

function TodoListItems({ todos, toggleCompleted }) {
    const todoList = todos.map((todo, index) => {
        return (
            <li
                key={index}
                onClick={() => toggleCompleted(index)}
                style={{
                    textDecoration: todo.isCompleted ? 'line-through' : 'initial'
                }}>
                {todo.text}
            </li>
        )
    })
    return (
        <div>
            <h2>Todos:</h2>
            <ul>
                {todoList}
            </ul>
        </div>
    )
}

TodoListItems.propTypes = {
    // todos: PropTypes.arrayOf(PropTypes.string)
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            isCompleted: PropTypes.bool.isRequired
        })

    ),
    toggleCompleted: PropTypes.func.isRequired
}

export default TodoListItems
