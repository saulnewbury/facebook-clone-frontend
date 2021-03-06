import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '45%',
  left: '50%',
  width: '300px',
  minWidth: '400px',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#fff',
  boxShadow: '0 0 8px rgba(0, 0, 0, .2)',
  borderRadius: '5px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, .8)',
  zIndex: 3
}

export default function SignUpModal({ open, children }) {
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById('sign-up-portal')
  )
}
