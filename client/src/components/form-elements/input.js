import * as React from "react"

import "../../styles/components/form-elements/input.scss"

const Input = ({
  htmlType,
  id,
  name,
  classes = "",
  placeholder = "",
  ...props
}) => {
  return (
    <input
      type={htmlType}
      id={id}
      name={name}
      className={classes}
      placeholder={placeholder}
      {...props}
    />
  )
}

export default Input
