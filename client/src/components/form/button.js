import * as React from "react"

import "../../styles/components/form/button.scss"

const Button = ({
  children,
  htmlType = "button",
  classes,
  ...props
}) => {
  return (
    <button
      type={htmlType}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
