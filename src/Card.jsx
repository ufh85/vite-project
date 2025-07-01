import React from 'react';
import {Header} from './Header';
import {Content} from './Content';

function Card(props) {
    return (
        <>    
            <Header userName={props.forumPost.userName}/>
            <Content message={props.forumPost.message}/>
        </>
    );
}

export {Card};