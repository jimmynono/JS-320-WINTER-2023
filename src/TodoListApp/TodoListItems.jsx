import React from 'react';
import PropTypes from 'prop-types';

function TodoListItems({ todos }) {
    const todoList = todos.map((todo, index) => {
        return (
            <li key={index}>{todo}</li>
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
    todos: PropTypes.arrayOf(PropTypes.string)
}

export default TodoListItems
