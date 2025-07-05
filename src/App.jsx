import './App.css'
import {Card} from './Card';
import {posts} from './forumPosts.js';
import {InputForm} from './InputForm';
import ToDoContainer from './ToDoContainer';
import PostIt from './PostIt';

function App() {
 
    return (
        <>
            <ToDoContainer />
            {posts.map((post, i) => <Card key={'post_' + i} forumPost={post}/>)}
            <InputForm />
            <PostIt text={'First note. How does this text wrap from inside the div?'} header={'Header text'}/>
        </>
 )
}

export default App
