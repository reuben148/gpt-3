import React from 'react'
import './blog.css'
import { Article } from '../../components';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__heading'>
       <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
      <div className='gpt3__blog-container-groupA'>
        <Article />
      </div>
      <div className='gpt3__blog-container-groupB'>
      <Article />
      <Article />
      <Article />
      <Article />
      </div>
      </div>
    </div>
  )
}

export default Blog