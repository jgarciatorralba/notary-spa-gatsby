import * as React from "react"

import "../../styles/components/form/textarea.scss"

const Textarea = ({
  id,
  name,
  classes = "",
  placeholder = "",
  rows = 3,
  ...props
}) => {
  return (
    <textarea
      id={id}
      name={name}
      className={classes}
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  )
}

export default Textarea
