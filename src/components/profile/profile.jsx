import React from 'react'
import './profile.css'
import StoryItem from '../StoryItem/storyItem';
import story from '../../constants'

function profile(){
   return ( <div className="profile">
   <div className="profilepic">
      <img  src="https://i.pinimg.com/564x/9a/4b/8b/9a4b8b6d4369ef5e5bbc9bc3451de664.jpg" alt="profilepic" />
   </div>
   <h3 className='text-center username'> @JCharles</h3>
   <div className="work">UI/UX Designer</div>
   <button className="button"><span style={{color: 'white'}}>Edit</span></button>


   <div className="stats">
      <div>
       <h3 className='text-center' style={{margin:'0.5rem'}}>300</h3>
       <h3 className='stat' >Posts</h3>
      </div>
      <div>
       <h3 className='text-center' style={{margin:'0.5rem'}}>5.5k</h3>
       <h3 className='stat' >Followers</h3>      
      </div>
      <div>
       <h3 className='text-center' style={{margin:'0.5rem'}}>50</h3>
       <h3 className='stat' >Following</h3>        
      </div>
   </div>
   <div className="description">
       <h4>Jessica charles</h4>
       <p>My speciality lies in creating videos, amazing designs, and high quality prototypes for websites. 
       I'm also a photographer and I have a lot more hobbies...</p>
   </div>  


   <div className="stories">
       <h5>Your Stories</h5>
       <div className="story">
           {story.map((story)=>
               <StoryItem story={story.image} key={story.id} />
           )}
       </div>
   </div>
</div>
);
}

export default profile;