import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog04, blog05, blog3 } from './index';
 

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgurl={blog01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgurl={blog02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgurl={blog3}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgurl={blog04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgurl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
