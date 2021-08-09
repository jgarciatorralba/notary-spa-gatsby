import * as React from "react"

import "../../styles/components/form/textareaGroup.scss"

const TextareaGroup = ({
  wrapperClasses,
  labelClasses,
  labelText,
  id,
  name,
  textareaClasses = "",
  placeholder = "",
  rows = 5,
  errorClasses,
  errorText
}) => {
  return (
    <div
      className={wrapperClasses}
    >

      <label
        className={labelClasses}
        htmlFor={id}
      >
        {labelText}
      </label>

      <textarea
        id={id}
        name={name}
        className={textareaClasses}
        placeholder={placeholder}
        rows={rows}
      />

      <p
        className={errorClasses}
      >
        {errorText}
      </p>

    </div>
  )
}

export default TextareaGroup
