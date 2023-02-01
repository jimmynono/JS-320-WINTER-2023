import React, { useState } from 'react';
import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';

function TodoListApp() {
    const [itemToAdd, setItemText] = useState('');
    const [todos, setTodos] = useState([]);

    // {text: 'Wash Cat', isCompleted: true},

    const addItem = (event) => {
        event.preventDefault();

        // added this line to prevent empty form submission
        if (itemToAdd === '') {
            return;
        }

        const todo = {
            text: itemToAdd,
            isCompleted: false
        }
        setTodos([...todos, todo]);
        setItemText('');
    }

    const toggleCompleted = (index) => {
        const todoToUpdate = todos[index]

        const newTodo = {
            ...todoToUpdate,
            isCompleted: !todoToUpdate.isCompleted
        }

        setTodos([
            ...todos.slice(0, index),
            newTodo,
            ...todos.slice(index + 1, todos.length)
        ])
    }


    // will implement soon
    const deleteTodo = (index) => {

        setTodos([
            ...todos.slice(0, index),
            ...todos.slice(index + 1, todos.length)
        ])
    }



    return (
        <div>
            <h1>TODO LIST APP</h1>
            <TodoListForm
                itemToAdd={itemToAdd}
                setItemText={setItemText}
                addItem={addItem}
            />
            <TodoListItems todos={todos} toggleCompleted={toggleCompleted} />
        </div>
    )
}

export default TodoListApp;
