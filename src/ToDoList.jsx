import React, { useState } from 'react';

function ToDoList({toDos, handleAdd, handleRemove}) {
    const [ text, setText ] = useState('');

    const handleChange = ({target}) => {
        setText(target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAdd(event.target.taskName.value);
        setText('');
    }

    const handleRemoveClick = (id) => {
        handleRemove(id);
    }
    
    return (
        <>  
            <div className='formContainer'>
                <form className='toDoForm' onSubmit={handleSubmit}>
                    <div>
                        <h4 className='toDoFormLabel'>Task list</h4>
                    </div>
                    <div className='taskFormInput'>
                        <input type='text' name='taskName' onChange={handleChange} value={text} />
                        <input type='submit' value='Add' />
                    </div>
                </form>
            </div>
            <div>
                {toDos.map((item, i)=> <div className='toDoItem' key={'to_do_' + i}>{item.text}<input type='button' onClick={() => handleRemoveClick(item.id)} value='-' /></div>)}
            </div>
        </>
    )
}

export default ToDoList;