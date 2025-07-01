import React from 'react';

function ToDoList({toDos, handleAdd}) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAdd(event.target.taskName.value);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='taskName' />
                <input type='submit' value='Add' />
            </form>
            <div>
                {toDos.map((item, i)=> <p key={'to_do_' + i}>{item.text}</p>)}
            </div>
        </>
    )
}

export default ToDoList;