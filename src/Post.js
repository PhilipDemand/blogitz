import React, { useState } from 'react';

function Post({ onAddItem}) {

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    image: "",
    content: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      author: formData.author,
      title: formData.title,
      image: formData.image,
      content: formData.content,
      likes: 0
    }

    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((r) => r.json())
      .then((newItem) => onAddItem(newItem));
  }

  return (
    <div className="card">
    <form onSubmit={handleSubmit}>
      Author:<input 
      type="text" 
      name="author" 
      value={formData.author} 
      onChange={handleChange}/><br></br>
      
      Title:<input 
      type="text" 
      name="title" 
      value={formData.title} 
      onChange={handleChange}/><br></br>

      Image URL:<input 
      type="text" 
      name="image" 
      value={formData.image} 
      onChange={handleChange}/><br></br>

      Your Blog Entry:<input 
      type="text" 
      name="content"
      style={{ width: "400px", height: "200px" }}
       
      value={formData.content} 
      onChange={handleChange}/><br></br>
      
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Post