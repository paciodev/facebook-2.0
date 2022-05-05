import React from 'react'
import { stories } from "./data/stories"
import StoryCard from './StoryCard'

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto overflow-x-auto scrollbar-hide">
      {stories.map((story) => (
        <StoryCard key={story.id} name={story.name} src={story.src} profile={story.profile}/>
      ))}
    </div>
  )
}

export default Stories