import * as React from "react"
import { useState } from "react"

import Input from "./input"
import Textarea from "./textarea"
import Label from "./label"
import Button from "./button"
import ErrorMessage from "./errorMessage"

import "../../styles/components/form/form.scss"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Form = ({ inputsLocales, buttonLocales }) => {
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [honeypot, setHoneypot] = useState("")

  const {
    fullname: fullnameLocales,
    email: emailLocales,
    message: messageLocales,
    honeypot: honeypotLocales
  } = inputsLocales

  function handleSubmit(e) {
    e.preventDefault()

    console.log("submit!")
    if (fullname)
      console.log(fullname)
    if (email)
      console.log(email)
    if (message)
      console.log(message)
  }

  return (
    <div className="section-form">
      <form
        onSubmit={handleSubmit}
      >
        <div
          className="flex flex-wrap justify-between"
        >
          <div
            className="inline-input mb-6"
          >
            <Label
              htmlFor="fullname"
              classes="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              {fullnameLocales.label}
            </Label>

            <Input
              htmlType="text"
              id="fullname"
              name="fullname"
              classes={classNames(
                "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              )}
              placeholder={fullnameLocales.placeholder}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            <ErrorMessage
              classes="text-red-500 text-xs italic"
            >
              {fullnameLocales.errors.empty}
            </ErrorMessage>
          </div>

          <div
            className="inline-input mb-6"
          >
            <Label
              htmlFor="email"
              classes="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              {emailLocales.label}
            </Label>

            <Input
              htmlType="email"
              id="email"
              name="email"
              classes={classNames(
                "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              )}
              placeholder={emailLocales.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <ErrorMessage
              classes="text-red-500 text-xs italic"
            >
              {emailLocales.errors.invalid}
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
            {messageLocales.label}
          </Label>

          <Textarea
            id="message"
            name="message"
            classes={classNames(
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            )}
            placeholder={messageLocales.placeholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <ErrorMessage
            classes="text-red-500 text-xs italic"
          >
            {messageLocales.errors.empty}
          </ErrorMessage>
        </div>

        <div
          className="mb-6"
        >
          <Input
            htmlType="text"
            id="honeypot"
            name="honeypot"
            classes={classNames(
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            )}
            placeholder={honeypotLocales.placeholder}
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <Button
            type="submit"
            classes={classNames(
              "focus:outline-none py-2 px-4 rounded-full"
            )}
          >
            {buttonLocales.text}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form
