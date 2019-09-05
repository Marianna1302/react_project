import React from 'react';
import { userInfo } from 'os';
function Post(props) {
    const {
        data_create,
        data_update,
        description,
        id,
        likes,
        title,
        user
    } = props.post;
    return (
        <div className="post">
            <input type="checkbox" />
            <i>{data_update}</i>
            <span>{likes}</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <b>{user.name}</b>
        </div>
    )
}

export default Post;
