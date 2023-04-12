import BlogCard from './BlogCard'

function BlogContainer({ blogs, handlePlusLike }) {
    
    return (
        <div>
            {blogs.map(blogObj => (
                <BlogCard key={blogObj.id} blogObj={blogObj} handlePlusLike={handlePlusLike}/>
            ))}
        </div>
    )
}

export default BlogContainer