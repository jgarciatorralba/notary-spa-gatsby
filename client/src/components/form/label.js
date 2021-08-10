import * as React from "react"

import "../../styles/components/form/label.scss"

const Label = ({
  htmlFor,
  classes = "",
  text,
  ...props
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classes}
      {...props}
    >
      {text}
    </label>
  )
}

export default Label
