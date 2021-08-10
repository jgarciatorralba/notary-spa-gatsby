import * as React from "react"

import "../../styles/components/form/errorMessage.scss"

const ErrorMessage = ({
  classes = "",
  text,
  ...props
}) => {
  return (
    <p
      className={classes}
      {...props}
    >
      {text}
    </p>
  )
}

export default ErrorMessage
