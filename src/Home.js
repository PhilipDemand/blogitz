import React, { useState } from 'react';
import BlogCard from './BlogCard'

function Home({ blogs, handlePlusLike }) {

    const [atLeastLikes, setAtLeastLikes] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
      };
    
    const filteredArray = blogs.filter(entry => entry.likes >= atLeastLikes)
    
    const sortedArray = filteredArray.sort((a, b) => b.id - a.id);
 
    return (
        <div>
             <div className="card">
                <form onSubmit={handleSubmit}>
                <label>
                    Number
                    <input type="text" value={atLeastLikes} onChange={(e) => setAtLeastLikes(e.target.value)} />
                </label>
                <br />
                </form>
            </div>
            {sortedArray.map(blogObj => (
                <BlogCard key={blogObj.id} blogObj={blogObj} handlePlusLike={handlePlusLike}/>
            ))}
        </div>
    )
}

export default Home