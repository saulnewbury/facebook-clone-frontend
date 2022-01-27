import React from 'react'
import './create-post.css'
import FaceIcon from '@mui/icons-material/Face'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined'
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined'
import MoodIcon from '@mui/icons-material/Mood'

const createPostIcons = [
  { icon: VideocamOutlinedIcon, name: 'Live video' },
  { icon: AddPhotoAlternateOutlinedIcon, name: 'Photos/video' },
  { icon: MoodIcon, name: 'Feeling activity' }
]

export default function CreatePost() {
  return (
    <div className="create-post card">
      <div className="card-header">
        <FaceIcon className="icon" />
        <button className="create-post-btn btn">
          Whats on your mind, Jacamo?
        </button>
      </div>
      <div className="card-footer">
        {createPostIcons.map(icon => {
          return (
            <button className="btn">
              <p>{icon.name}</p>
              <icon.icon className="icon" />
            </button>
          )
        })}
      </div>
    </div>
  )
}