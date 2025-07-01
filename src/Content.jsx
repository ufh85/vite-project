import React from 'react';

function Content({message='No message found'}) {
    return <p className='message'>{message}</p>
}

export {Content};