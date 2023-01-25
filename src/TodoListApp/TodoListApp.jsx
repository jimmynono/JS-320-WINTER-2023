import React, { useState } from 'react';
import TodoListForm from './TodoListForm';
import TodoListItems from './TodoListItems';

function TodoListApp() {
    const [itemToAdd, setItemText] = useState('');
    const [todos, setTodos] = useState([]);

    const addItem = (event) => {
        event.preventDefault();
        setTodos([...todos, itemToAdd]);
        setItemText('');
    }

    return (
        <div>
            <h1>TODO LIST APP</h1>
            <TodoListForm
                itemToAdd={itemToAdd}
                setItemText={setItemText}
                addItem={addItem}
            />
            <TodoListItems todos={todos} />
        </div>
    )
}

export default TodoListApp;
