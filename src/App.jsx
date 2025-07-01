import './App.css'
import {Card} from './Card';
import {posts} from './forumPosts.js';
import {InputForm} from './InputForm';

function App() {
 
    return (
        <>
            {posts.map((post, i) => <Card key={'post_' + i} forumPost={post}/>)}
            <InputForm />
        </>
 )
}

export default App
