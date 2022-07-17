import React from 'react'
import img from './images/img2.svg';
import './components.css';


export default function Navbar() {
  return (
    <>
    <nav className="navbar">
     <div className='nav-logo'>  <img className='page2-img' src={img} alt="" className="logo-in-bar" /> MATRIX-UI</div>
       <ul>
         <li className='inline'> <a href='#'  className="navItem">MEN</a></li>
         <li className='inline'> <a href='#'  className="navItem">WOMEN</a></li>
         <li className='inline'> <a href='#'  className="navItem">KIDS</a></li>
         <li className='inline'> <a href='#'  className="navItem">ELECTRONICS</a></li>
         <li className='inline'><input className='search' placeholder='Search'/></li>
       </ul>
       </nav>

<br />

    <nav className="navbar dark">
     <div className='nav-logo'> <img className='page2-img' src={img} alt="" className="logo-in-bar" />  MATRIX-UI</div>
       <ul>
         <li className='inline '> <a href='#'  className="navItem">MEN</a></li>
         <li className='inline'> <a href='#'  className="navItem">WOMEN</a></li>
         <li className='inline'> <a href='#'  className="navItem">KIDS</a></li>
         <li className='inline'> <a href='#'  className="navItem">ELECTRONICS</a></li>
         <li className='inline'><input className='search' placeholder='Search'/></li>
       </ul>
        </nav>

      


       <div className='carbon-box'>
<iframe
  src="https://carbon.now.sh/embed?bg=rgba%28195%2C177%2C171%2C1%29&t=panda-syntax&wt=none&l=jsx&width=680&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=11px&ph=7px&ln=false&fl=1&fm=Hack&fs=14px&lh=109%25&si=false&es=2x&wm=false&code=%2520%253Cnav%2520className%253D%2522navbar%2520%255Bdark%255D%2520%2522%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520className%253D%27nav-logo%27%253EMATRIX-UI%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%27inline%27%253E%2520%253Ca%2520href%253D%27%2523%27%2520%2520className%253D%2522navItem%2522%253EMEN%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%27inline%27%253E%2520%253Ca%2520href%253D%27%2523%27%2520%2520className%253D%2522navItem%2522%253EWOMEN%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%27inline%27%253E%2520%253Ca%2520href%253D%27%2523%27%2520%2520className%253D%2522navItem%2522%253EKIDS%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%27inline%27%253E%2520%253Ca%2520href%253D%27%2523%27%2520%2520className%253D%2522navItem%2522%253EELECTRONICS%253C%252Fa%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520className%253D%27inline%27%253E%253Cinput%2520className%253D%27search%27%2520placeholder%253D%27Search%27%252F%253E%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%2520%2520%2520%253C%252Fnav%253E"
  style={{width: "760px", height: "319px" , border:"0" , transform: "scale(1)", overflow:"hidden"}}
  sandbox="allow-scripts allow-same-origin">
</iframe>
</div>
    </>
  )
}


