import * as React from "react"

import "../../styles/components/form/errorMessage.scss"

const ErrorMessage = ({
  children,
  classes = "",
  text,
  ...props
}) => {
  return (
    <p
      className={classes}
      {...props}
    >
      {children}
    </p>
  )
}

export default ErrorMessage
