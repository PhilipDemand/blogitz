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

function createStampMessage(string) {
  
    const year = string.slice(0,4)
    const month = string.slice(4,6)
    const day = string.slice(6,8)
    const hour = string.slice(8,10)
    const minute = string.slice(10,12)
    const second = string.slice(12,14)
  
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const monthName = monthNames[month - 1];
  
    function parseHourNumber(string) {
        if (string === "00") {
          return 12
        } else {
          return parseInt(string)
        }
      }
  
    const hourNumber = parseHourNumber(hour)
  
    function regularTime(num) {
      if (num > 12) {
        return (num - 12)
      } else {
        return num
      }
        }
  
    const regularTimeNumber = regularTime(hourNumber)
  
    function antiPost(string) {

        const parsedString = parseInt(string)
    
        if (parsedString < 12) {
          return "AM"
        } else {
          return "PM"
        }
      }
  
    const halfOfDay = antiPost(hour)
  
    function attachSuffix(num) {
    if (num === 1 || num === 21 || num === 31) {
      return num + "st";
    } else if (num === 2 || num === 22) {
      return num + "nd";
    } else if (num === 3 || num === 23) {
      return num + "rd";
    } else {
      return num + "th";
    }
  }
    const dayWithSuffix = attachSuffix(day)
  
    return `Submitted: ${monthName} ${dayWithSuffix} ${year} at ${regularTimeNumber}:${minute}:${second} ${halfOfDay}`
  }

  const message = createStampMessage(blogObj.timeStamp)

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