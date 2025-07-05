import './App.css'
import {Card} from './Card';
import {posts} from './forumPosts.js';
import {InputForm} from './InputForm';
import ToDoContainer from './ToDoContainer';
import PostItCalendar from './PostItCalendar';

function App() {
 
    return (
        <>
            <ToDoContainer />
            {posts.map((post, i) => <Card key={'post_' + i} forumPost={post}/>)}
            <InputForm />
            <PostItCalendar />
        </>
 )
}

export default App
