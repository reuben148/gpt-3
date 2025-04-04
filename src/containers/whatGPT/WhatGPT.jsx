import React from 'react'
import './whatGPT.css'
import {Features} from '../../containers';

const WhatGPT = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
        <div className='gpt3__whatgpt3-feature'>
           <Features title='What is GPT-3' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'/>
        </div>
        
        {/* Explore Heading */}
        <div className='gpt3__whatgpt3-heading'>
           <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
           <p>Explore The Library</p>   
        </div>  

        {/* Features go below the heading */}
        <div className='gpt3__whatgpt3-container'>
            <Features title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought.'/>
            <Features title='Knowledgebase' text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"/>
            <Features title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        </div>     
    </div>
  )
}

export default WhatGPT;
