import React, { useState } from 'react';
import ToDoList from './ToDoList';

function ToDoContainer() {
    const [toDos, setTodos] = useState([{id: 1, text: "Think for a bit"}]);

    function generateId() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }

    const addToDo = (text) => {
        setTodos((prev) => [...prev, {text: text, id: generateId()}]);
    }

    return (
        <>
            <ToDoList handleAdd={addToDo} toDos={toDos}/>
        </>
    )
}

export default ToDoContainer;