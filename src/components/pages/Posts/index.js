import React, { useState, useEffect } from 'react';
import List from './components/List';
import './style.scss';
import { listPosts } from './service';

function Posts() {
    const [posts, changePosts] = useState([]);
    useEffect(()=>{
        listPosts()
        .then((data) => {
            console.log(data);
            changePosts(data);
        });
    },[]);
    
    return (
        <div id="posts">
           <List posts={posts} />
        </div>
    )
}

export default Posts;
