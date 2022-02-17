import React, { useState } from 'react'
import './main.css'

function Main(){
  const [appState , ChangeState] = useState(false);
  
  const ToggleActiveStyles = () =>{
    ChangeState(!appState)
  }
   return <div className="square">
            <div className="postWrapper">
            <div className="posttop">
                <div className="postleft">
                    <img src ="#" alt="user" />
                    <span className='username'>{ }</span>
                </div>
            </div>
            </div>
    <div className="img">
      <h2>Petronas Towers</h2>
    </div>
    <div className="content">
       <div className="icons">
       <div className={appState ? "changecolor" : "inactive"} onClick={ToggleActiveStyles}>
        <i  className="fas fa-heart"></i>
        <p Id="like"></p>
      </div>
        <i className="fas fa-comment-alt"></i>
        <p>9</p>
        <i className="fas fa-paper-plane"></i>
      </div>
      <p>The petronas, my last visit is unknowingly a fascinating place.</p>
    </div>
  </div>
}

export default Main;