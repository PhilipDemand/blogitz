import React from 'react';
import moment from 'moment';

function BlogCard({ blogObj, handlePlusLike }) {
    
    function handleLikeFetch() {
        fetch(`http://localhost:4000/blogs/${blogObj.id}`, {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify({
        likes: blogObj.likes
    }),
  })
    .then((r) => r.json())
  }

function sendPlusLike() {
    handlePlusLike(blogObj.id)
    handleLikeFetch()
}

const dateTime = moment(blogObj.timeStamp, 'YYYYMMDDHHmmss');
const message = dateTime.format('[Submitted: ]MMMM Do YYYY [at] h:mm:ss A');

    return (
        <div className="card">
            <h2>{blogObj.title}</h2>
            <img src={blogObj.image} alt="Entry" width="100" height="100"></img>
            <h3>Author: {blogObj.author}</h3>
            <h4>{message}</h4>
            <p>{blogObj.content}</p>
            <button onClick={sendPlusLike}>👍🏻{blogObj.likes}</button>
        </div>
    )
}

export default BlogCard