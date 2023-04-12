import BlogCards from './BlogCards'

function BlogContainer({ blogs, handlePlusLike }) {
    
    return (
        <div>
            {blogs.map(blogObj => (
                <BlogCards key={blogObj.id} blogObj={blogObj} handlePlusLike={handlePlusLike}/>
            ))}
        </div>
    )
}

export default BlogContainer