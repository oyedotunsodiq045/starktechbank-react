import React from 'react'
import { Alert } from 'react-bootstrap'

const MessageCard = ({ variant, children }) => {
  return (
    <Alert 
      className="mx-auto mt-5 w-50 h-50"
      variant={variant}
    >
      {children}
    </Alert>
  )
}

MessageCard.defaultProps = {
  variant: 'info',
}

export default MessageCard
