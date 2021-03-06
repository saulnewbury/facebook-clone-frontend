import React, { useState } from 'react'
import './post.scss'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined'
import Comments from './comments/Comments'
import AnimatedEmojis from '../../shared/AnimatedEmojis'
import thumb from '../../../assets/emoji-pngs/thumb.png'
import heart from '../../../assets/emoji-pngs/heart.png'
import care from '../../../assets/emoji-pngs/care.png'
import haha from '../../../assets/emoji-pngs/haha.png'
import wow from '../../../assets/emoji-pngs/wow.png'
import sad from '../../../assets/emoji-pngs/sad.png'
import angry from '../../../assets/emoji-pngs/angry.png'

export default function Post({ post }) {
  const [hoverState, setHoverState] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const handleLikeClick = () => {
    console.log(likes)
    console.log('handler clicked')
    setLikes(isLiked ? likes - 1 : likes + 1)
    setIsLiked(!isLiked)
    setHoverState(false)
  }
  const handleEmojiVisibility = () => {
    setHoverState(true)
  }

  const [showWriteComment, setShowWriteComment] = useState(false)
  const handleShowWriteCommentClick = () => {
    if (showWriteComment === false) setShowWriteComment(!showWriteComment)
  }

  return (
    <>
      <div key={post.id} className="Post card">
        {/* header */}
        <div className="card-header m-p post-container">
          <AccountCircleIcon className="icon" />
          {post.online && <div className="online"></div>}
          <div className="details">
            <p>
              <a className="user-name" href="#">
                {post.userName}
              </a>
            </p>
            <div className="minutiae">
              <a href="#">{post.date}</a>
              <span>&middot;</span>
              <PeopleAltIcon className="friends-icon-small" />
            </div>
          </div>
          <div className="options">
            <button className="btn">
              <MoreHorizRoundedIcon className="options-icon" />
            </button>
          </div>
        </div>

        {/* Body */}
        {post.desc && (
          <div className="m-p description">
            <p>{post.desc}</p>
          </div>
        )}
        {post.photo && (
          <div className="content">
            <img src={post.photo} alt="" />
          </div>
        )}

        {/* Engagements */}
        <div className="m-p engagements">
          <div className="left">
            {post.likeCategory.thumbsUp && (
              <img src={thumb} alt="" className="joy-pixels-emoji thumb" />
            )}
            {post.likeCategory.heart && (
              <img src={heart} alt="" className="joy-pixels-emoji heart" />
            )}
            {post.likeCategory.care && (
              <img src={care} alt="" className="joy-pixels-emoji care" />
            )}
            {post.likeCategory.haha && (
              <img src={haha} alt="" className="joy-pixels-emoji haha" />
            )}
            {post.likeCategory.wow && (
              <img src={wow} alt="" className="joy-pixels-emoji wow" />
            )}
            {post.likeCategory.sad && (
              <img src={sad} alt="" className="joy-pixels-emoji sad" />
            )}
            {post.likeCategory.angry && (
              <img src={angry} alt="" className="joy-pixels-emoji angry" />
            )}

            <span className="likes-count">{likes}</span>
          </div>
          <div className="right">
            <span className="number-of-comments" href="#">
              {post.comments}
            </span>
            <span className="number-of-shares" href="#">
              {post.shares}
            </span>
          </div>
        </div>

        {/* Like Comment Share */}

        <div className="card-footer">
          <div className="reactions">
            <button
              onClick={() => handleLikeClick()}
              onMouseEnter={() => handleEmojiVisibility()}
              className="btn like-btn"
            >
              {isLiked ? (
                <ThumbUpIcon className="like-icon" />
              ) : (
                <ThumbUpAltOutlinedIcon className="like-icon" />
              )}
              <p>Like</p>
            </button>
            {hoverState ? (
              <AnimatedEmojis classAnimatedEmojiBar="animated-emojis" />
            ) : (
              <AnimatedEmojis classAnimatedEmojiBar="hide" />
            )}
          </div>
          <button className="btn" onClick={handleShowWriteCommentClick}>
            <ChatBubbleOutlineIcon className="comment-icon" />
            <p>Comment</p>
          </button>
          <button className="btn">
            <ReplyOutlinedIcon className="share-icon" />
            <p>Share</p>
          </button>
        </div>

        {/* Comments */}
        <Comments showWriteComment={showWriteComment} />
      </div>
    </>
  )
}
