import React from 'react'
import './Navbar.css'

function navbar(){
   return <div class="side-nav">
      <ul>
        <li><i className="fa fa-home" style={{color: 'black'}} aria-hidden="true"></i></li>
        <li><i className="fab fa-facebook-messenger" style={{color: 'black'}} aria-hidden="true"></i></li>
        <li><i className='fa fa-comments' style={{color: 'black'}} aria-hidden="true"></i></li>
        <li><i className='fa fa-cog' style={{color: 'black'}} aria-hidden="true"></i></li>
        <li><i className='fa fa-video' style={{color: 'black'}} aria-hidden="true"></i></li>
        <li><i className='fa fa-compass' style={{color: 'black'}} aria-hidden="true"></i></li>
      </ul>
    </div>
}
export default navbar;