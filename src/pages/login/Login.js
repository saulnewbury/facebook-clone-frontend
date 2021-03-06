import React, { useState, useEffect } from 'react'
import './login.css'
import SignUpModal from './SignUpModal'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded'
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded'

export default function Login() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const initialValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  const [formValues, setFormValues] = useState(initialValues)

  function onClose() {
    setIsOpen(false)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleValidation = e => {
    const name = e.target.name
    console.log(name) // returns a string, 'username'
    console.log(formValues[name]) // returns nothing!
  }

  const passwordVisibility = e => {
    setIsVisible(!isVisible)
    console.log(isVisible)
  }

  return (
    <>
      <div className="login-container">
        <div className="header-wrapper ">
          <h1>Facebook</h1>
          <h2>
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>
        <form>
          <input type="text" placeholder="Email address or phone number" />
          <input type="text" placeholder="Password" />
          <input type="submit" value="Log In" />
          <div className="forgotton-password-btn-wrapper">
            <span className="forgotton-password">Forgotten password?</span>
          </div>
          <button
            onClick={e => {
              e.preventDefault()
              setIsOpen(true)
            }}
            className="new-account-btn"
          >
            Create new account
          </button>
        </form>
      </div>
      <SignUpModal open={isOpen}>
        {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
        <div className="modal-header-wrapper signup-header">
          <h1 className="modal-title ">Sign Up</h1>
          <button className="modal-close-btn" onClick={onClose}>
            <CloseRoundedIcon className="modal-close-btn-icon" />
          </button>
        </div>
        <form className="signup-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            onBlur={handleValidation}
          ></input>
          <p className="form-message"></p>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onBlur={handleValidation}
          />
          <p className="form-message"></p>
          <div className="password-field-container">
            <input
              type={isVisible ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              onBlur={handleValidation}
            />
            <button className="visibility-btn" type="button">
              {isVisible ? (
                <VisibilityRoundedIcon onClick={e => passwordVisibility(e)} />
              ) : (
                <VisibilityOffRoundedIcon
                  onClick={e => passwordVisibility(e)}
                />
              )}
            </button>
          </div>
          <p className="form-message"></p>
          <input
            type="password"
            name="passwordConfirmation"
            placeholder="Re-enter Password"
            onBlur={handleValidation}
          />
          <p className="form-message"></p>
          <button className="btn-basic">Submit</button>
        </form>
      </SignUpModal>
    </>
  )
}
