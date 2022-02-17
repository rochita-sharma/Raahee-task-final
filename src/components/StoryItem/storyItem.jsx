import React from 'react'
import './storyItem.css'

function StoryItem({story , id}){
  return <div className="story-circle">
    <img src={story} key={id}/>
  </div>
}

export default StoryItem;