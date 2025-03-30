import React from 'react'
 
import { Footer, Blog, Possibility,  Header,WhatGPT } from './containers';
import { CTA, Brands, Navbar, Feature  } from './components';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
         <Navbar />
         <Header />
      </div>
      <Brands />
      <WhatGPT />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App