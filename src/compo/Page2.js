import React from 'react'
import img from './images/img2.svg'
import { Link } from "react-scroll"
import Navbar from './Navbar'
import Cards from './Cards'
import Buttons from './Buttons'
import Floating from './Floating'
import Alerts from './Alerts'
import Badge from './Badge'
import Avatar from './Avatar'


export default function Page2() {
  return (
    
 <>
 
 
    <div className='wrapper'>
      <div className="sidebar">
     
      <h2> <span> <img className='page2-img' src={img} alt="" /></span> MATRIX-UI </h2>
            <ul className='ul1'>
            
    
           
            
                <li ><Link to="NavBar" smooth={true} duration={2000}  className='links list'><i class="fa-solid fa-bars"></i>  NavBar </Link> </li>
                <li ><Link to="cards" smooth={true} duration={2000}  className='links list'> <i class="fa-solid fa-square-full"></i> Cards </Link></li>
                <li ><Link to="button-id" smooth={true} duration={2000}  className='links list'> <i class="fa-solid fa-stop"></i> Buttons </Link></li>
                <li><Link to="floating"  smooth={true} duration={2000} className='links list'> <i class="fa-solid fa-circle-dot"></i> Floating Buttons</Link> </li>
                <li ><Link to="alerts-id"  smooth={true} duration={2000} className='links list'> <i class="fa-solid fa-triangle-exclamation"></i> Alerts </Link></li>
                <li ><Link to="badge" smooth={true} duration={2000} className='links list'> <i class="fa-solid fa-id-badge"></i>  Badge on Card</Link></li>
                <li ><Link to="Avatars" smooth={true} duration={2000} className='links list'> <i class="fa-solid fa-user-tie"> </i> Avatars</Link></li>
            </ul>

             
            </div>
      </div>


            <div className="main-content">
            <h1>INSTALLATION</h1>
            <p className='para'>copy this code in the head tag of your HTML document and you are good to go:</p>
            
            
      
            <br />
           <br />
           <br />
           <br />
            <hr></hr>

             <br></br>
            <div  id='NavBar'>
              <h1>NavBars</h1>
              <br />
              <Navbar/>
              <br />
              <br />
              
              <br />
              <br />
              <br />
              <br />

              
            </div>
            <hr />
            <br />
            <div  id='cards'>
            <h1>Cards</h1>
            <p className='para'>copy this code in the head tag of your HTML document and you are good to go:</p>
            <Cards/>
            <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              </div>
            <hr></hr>

             <br></br>

             <div  id='button-id'>
             <h1>Buttons</h1>
           
           
           
           <Buttons/>
           <br />
           
           </div>
            <hr></hr>
            
             <br></br>
             <div  id='floating'>
             <h1>Floating Button</h1>
            
          
            <br />
              <br />
              <Floating/>
            
            
              <br />
              <br />
            
              </div>
            <hr></hr>

             <br></br>
             <div  id='alerts-id'>
             <h1>Alerts</h1>
           
            <p className='para'> saepe quaerat! Beatae deleniti perspiciatis veniam quis facere dolore, velit .</p>
              <br />
              <br />
              <br />

              <Alerts/>
              <br />
              <br />
              <br />
            <hr></hr>

             <br/>

             </div>

             <div  id='badge'>
             <h1>Badge on cards</h1>
            
            <p className='para'>Lorem ur, laudantium distinctio suscipit voluptatibus doloremque ipsum doloribus eos. Voluptates, saepe quaerat! Beatae deleniti perspiciatis veniam quis facere dolore, velit .</p>
           <br />
           <br />
           <br />
           <Badge/>
           <br />
           <br />
           <br />
            <hr></hr>

             <br></br>
             </div>
             <div  id='Avatars'>
             <h1>Avatar</h1>
          
            <p className='para'>   um blanditiis laudantium distinctio suscipit voluptatibus doloremque ipsum doloribus eos. Voluptates, saepe quaerat! Beatae deleniti perspiciatis veniam quis facere dolore, velit .</p>
           
           <br />
           <br />
           <br />

          <Avatar/>
        
      

           <br />
           <br />
           <br />
           
            <hr></hr>

             <br></br>
           
            
             </div>
           
           
           
            </div>

            
           
  </>
  )
}





