import * as React from "react"

import "../../styles/components/form/label.scss"

const Label = ({
  children,
  htmlFor,
  classes = "",
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classes}
      {...props}
    >
      {children}
    </label>
  )
}

export default Label
