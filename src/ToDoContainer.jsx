import React, { useState } from 'react';
import ToDoList from './ToDoList';

function ToDoContainer() {
    const [toDos, setTodos] = useState([{id: generateId(), text: "Think for a bit"}]);

    function generateId() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }

    const addToDo = (text) => {
        setTodos((prev) => [...prev, {text: text, id: generateId()}]);
    }

    const removeToDo = (toDoId) => {
        setTodos(toDos.filter(item => item.id !== toDoId));
    }

    return (
        <>
            <ToDoList handleAdd={addToDo} handleRemove={removeToDo} toDos={toDos}/>
        </>
    )
}

export default ToDoContainer;