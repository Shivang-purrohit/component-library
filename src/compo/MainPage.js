import React from 'react'
import Navbar from './Navbar';
import img from './images/img2.svg';
import { Link } from 'react-router-dom';
export default function MainPage() {
  return (
   
        <>
        <div>

        <div className='container'>
      <navbar className='above'>
     <div> <p className='p-tag'>MATRIX-UI</p></div> 
     <img className='image-logo' src={img} alt="" />
      
      <div className='github-side'>
      <a href="https://github.com/Shivang-purrohit">
      <i className='fa-brands fa-github '></i>
      </a>
       </div>
      </navbar>


    </div>

         </div>
    <div className='container-center'>
        <img className='images' src={img} alt="" />
        <div className='container-inside'> 
           <h1 className='welcome'>WELCOME TO MATRIX-UI</h1>
           <h2>Build minimalistic and beautiful UI using the Matrix UI library</h2>
        </div>
        <Link to="/page2" className='btn'>GET STARTED</Link>
         
      
    </div>
    </>
  )
}
