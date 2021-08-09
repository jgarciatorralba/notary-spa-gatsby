import * as React from "react"

import Input from "./input"
import Button from "./button"

import "../../styles/components/form/form.scss"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault()
    console.log("submit!")
  }

  return (
    <div className="section-form mb-4">
      <form
        onSubmit={handleSubmit}
      >
        <Input
          htmlType="text"
          id="fullname"
          name="fullname"
          classes={classNames(
            "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          )}
          placeholder="Jane"
        />

        <Button
          type="submit"
          classes={classNames(
            "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
          )}
        >
          Sign up
        </Button>
      </form>
    </div>
  )
}

export default Form
