import * as React from "react"

import "../../styles/components/form/inputGroup.scss"

const InputGroup = ({
  wrapperClasses,
  labelClasses,
  labelText,
  htmlType,
  id,
  name,
  inputClasses = "",
  placeholder = "",
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

      <input
        type={htmlType}
        id={id}
        name={name}
        className={inputClasses}
        placeholder={placeholder}
      />

      <p
        className={errorClasses}
      >
        {errorText}
      </p>

    </div>
  )
}

export default InputGroup
