import * as React from "react"

import "../../styles/components/form/button.scss"

const Button = ({
  children,
  htmlType = "button",
  classes,
  ...props
}) => {
  return (
    <div
      className="btn-form"
    >
      <button
        type={htmlType}
        className={classes}
        {...props}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
