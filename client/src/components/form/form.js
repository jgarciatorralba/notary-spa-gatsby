import * as React from "react"

import InputGroup from "./inputGroup"
import TextareaGroup from "./textareaGroup"
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
        <div className="flex flex-wrap justify-between">
          <InputGroup
            wrapperClasses="w-full sm:w-5/12 mb-6"
            labelClasses="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            labelText="First Name"
            htmlType="text"
            id="fullname"
            name="fullname"
            inputClasses={classNames(
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            )}
            placeholder="Jane"
            errorClasses="text-red-500 text-xs italic"
            errorText="Please fill out this field."
          />

          <InputGroup
            wrapperClasses="w-full sm:w-5/12 mb-6"
            labelClasses="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            labelText="Email"
            htmlType="email"
            id="email"
            name="email"
            inputClasses={classNames(
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            )}
            placeholder="janedoe@email.com"
            errorClasses="text-red-500 text-xs italic"
            errorText="Please fill out your email."
          />
        </div>

        <TextareaGroup
          wrapperClasses="mb-6"
          labelClasses="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          labelText="Message"
          id="message"
          name="message"
          textareaClasses={classNames(
            "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          )}
          placeholder="Your message here"
          errorClasses="text-red-500 text-xs italic"
          errorText="Please fill out this field."
        />

        <div className="mb-6">
          <Button
            type="submit"
            classes={classNames(
              "shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"
            )}
          >
            Sign up
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
