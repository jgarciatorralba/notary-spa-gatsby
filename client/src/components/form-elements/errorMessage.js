import * as React from "react"

import "../../styles/components/form-elements/errorMessage.scss"

const ErrorMessage = ({ children, classes = "", text, ...props }) => {
  return (
    <div className="error-message">
      <p className={classes} {...props}>
        {children}
      </p>
    </div>
  )
}

export default ErrorMessage
