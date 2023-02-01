import React from 'react';
import yourArticles from './yourArticles.json';


function Blogs() {

  const blogs = yourArticles.map((blog, idx) => {
    return <div className="blog" key={idx}>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      {blog.hasAudioAvailable && <span>Has Audio</span>}
      <span>Norton</span>
      <img className="blog-img" src={blog.image} alt="thing" />
    </div>
  })
  return (
    <>
      <h1>Blogs</h1>
      <div className="blog-container">
        {blogs}
      </div>
    </>
  )
}

export default Blogs;
