import * as React from "react"

import Input from "./input"
import Textarea from "./textarea"
import Label from "./label"
import Button from "./button"
import ErrorMessage from "./errorMessage"

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
        <div
          className="flex flex-wrap justify-between"
        >
          <div
            className="w-full sm:w-5/12 mb-6"
          >
            <Label
              htmlFor="fullname"
              classes="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </Label>

            <Input
              htmlType="text"
              id="fullname"
              name="fullname"
              classes={classNames(
                "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              )}
              placeholder="Jane"
            />

            <ErrorMessage
              classes="text-red-500 text-xs italic"
            >
              Please fill out this field.
            </ErrorMessage>
          </div>

          <div
            className="w-full sm:w-5/12 mb-6"
          >
            <Label
              htmlFor="email"
              classes="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </Label>

            <Input
              htmlType="email"
              id="email"
              name="email"
              classes={classNames(
                "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              )}
              placeholder="janedoe@email.com"
            />

            <ErrorMessage
              classes="text-red-500 text-xs italic"
            >
              Please fill out your email.
            </ErrorMessage>
          </div>
        </div>

        <div
          className="mb-6"
        >
          <Label
            htmlFor="message"
            classes="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Message
          </Label>

          <Textarea
            id="message"
            name="message"
            classes={classNames(
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            )}
            placeholder="Your message here"
          />

          <ErrorMessage
            classes="text-red-500 text-xs italic"
          >
            Please fill out this field.
          </ErrorMessage>
        </div>

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
