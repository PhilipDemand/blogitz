import React from 'react';

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

    return (
        <div className="card">
            <h2>{blogObj.title}</h2>
            <img src={blogObj.image} alt="Entry" width="100" height="100"></img>
            <h3>Author: {blogObj.author}</h3>
            <p>{blogObj.content}</p>
            <button onClick={sendPlusLike}>👍🏻{blogObj.likes}</button>
        </div>
    )
}

export default BlogCard