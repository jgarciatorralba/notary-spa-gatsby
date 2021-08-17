import * as React from "react"
import { useState } from "react"

import { useGoogleReCaptcha } from "react-google-recaptcha-v3"

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
  const {
    fullname: fullnameLocales,
    email: emailLocales,
    message: messageLocales,
    honeypot: honeypotLocales
  } = inputsLocales

  const [fullname, setFullname] = useState("")
  const [errorFullname, setErrorFullname] = useState(null)
  const [email, setEmail] = useState("")
  const [errorEmail, setErrorEmail] = useState(null)
  const [message, setMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [honeypot, setHoneypot] = useState("")
  const [formIsSubmitted, setFormIsSubmitted] = useState(false)

  const { executeRecaptcha } = useGoogleReCaptcha()

  function validateInputs() {
    let inputsAreValid = true

    if (fullname) {
      setErrorFullname(null)
    } else {
      setErrorFullname(fullnameLocales.errors.empty)
      inputsAreValid = false
    }

    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!email) {
      setErrorEmail(emailLocales.errors.empty)
      inputsAreValid = false
    } else {
      if (regex.test(email.toLowerCase())) {
        setErrorEmail(null)
      } else {
        setErrorEmail(emailLocales.errors.invalid)
        inputsAreValid = false
      }
    }

    if (message) {
      setErrorMessage(null)
    } else {
      setErrorMessage(messageLocales.errors.empty)
      inputsAreValid = false
    }

    return inputsAreValid
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!executeRecaptcha) {
      return
    }

    setFormIsSubmitted(true)
    const validInputs = validateInputs()

    if (honeypot) {
      return
    } else {
      if (validInputs) {
        const token = await executeRecaptcha('send_form')
        const data = JSON.stringify({ fullname, email, message, token })

        console.log("Valid!")
        console.log(data)

        // fetch('/submit', {
        //   method: 'POST',
        //   headers: {
        //     'Accept': 'application/json, text/plain, */*',
        //     'Content-type': 'application/json'
        //   },
        //   body: data
        // })
        // .then(res => res.json())
        // .then(data => {
        //   setNotification(data.msg) //--> dynamically set your notification state via the server
        // })

      } else {
        console.log("Invalid!")
      }
    }
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
            className="input-group inline-input mb-3"
          >
            <Label
              htmlFor="fullname"
              classes="block uppercase tracking-wide text-xs font-bold mb-2"
            >
              {fullnameLocales.label}
            </Label>

            <Input
              htmlType="text"
              id="fullname"
              name="fullname"
              classes={classNames(
                (!formIsSubmitted) ? "" : (errorFullname ? "error" : "success"),
                "appearance-none block w-full py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              )}
              placeholder={fullnameLocales.placeholder}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            {formIsSubmitted && errorFullname && (
              <ErrorMessage
                classes="text-xs italic"
              >
                {errorFullname}
              </ErrorMessage>
            )}
          </div>

          <div
            className="input-group inline-input mb-3"
          >
            <Label
              htmlFor="email"
              classes="block uppercase tracking-wide text-xs font-bold mb-2"
            >
              {emailLocales.label}
            </Label>

            <Input
              htmlType="email"
              id="email"
              name="email"
              classes={classNames(
                (!formIsSubmitted) ? "" : (errorEmail ? "error" : "success"),
                "appearance-none block w-full py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              )}
              placeholder={emailLocales.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {formIsSubmitted && errorEmail && (
              <ErrorMessage
                classes="text-xs italic"
              >
                {errorEmail}
              </ErrorMessage>
            )}
          </div>
        </div>

        <div
          className="input-group message mb-3"
        >
          <Label
            htmlFor="message"
            classes="block uppercase tracking-wide text-xs font-bold mb-2"
          >
            {messageLocales.label}
          </Label>

          <Textarea
            id="message"
            name="message"
            classes={classNames(
              (!formIsSubmitted) ? "" : (errorMessage ? "error" : "success"),
              "appearance-none block w-full py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            )}
            placeholder={messageLocales.placeholder}
            maxLength="500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {formIsSubmitted && errorMessage && (
            <ErrorMessage
              classes="text-xs italic"
            >
              {errorMessage}
            </ErrorMessage>
          )}
        </div>

        <div
          className="hidden mb-3"
        >
          <Input
            htmlType="text"
            id="honeypot"
            name="honeypot"
            classes={classNames(
              "appearance-none block w-full py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            )}
            placeholder={honeypotLocales.placeholder}
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className="mb-3">
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
