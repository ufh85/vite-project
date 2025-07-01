import React from 'react';

function ToDoList({toDos, handleAdd, handleRemove}) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAdd(event.target.taskName.value);
    }

    const handleRemoveClick = (id) => {
        handleRemove(id);
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name='taskName' />
                <input type='submit' value='Add' />
            </form>
            <div>
                {toDos.map((item, i)=> <div key={'to_do_' + i}>{item.text}<input type='button' onClick={() => handleRemoveClick(item.id)} value='-' /></div>)}
            </div>
        </>
    )
}

export default ToDoList;