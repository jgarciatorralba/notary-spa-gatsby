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

const Form = ({ inputsLocales, buttonLocales, successLocales, errorLocales }) => {
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
  const [formIsValidated, setFormIsValidated] = useState(false)
  const [submittingForm, setSubmittingForm] = useState(false)
  const [formSubmitResult, setFormSubmitResult] = useState({})

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

    const validInputs = validateInputs()
    setFormSubmitResult({})
    setFormIsValidated(true)

    if (honeypot) {
      return
    } else {
      if (validInputs) {
        setSubmittingForm(true)

        const token = await executeRecaptcha('send_form')
        const data = JSON.stringify({
          fullname: fullname.trim(),
          email: email.trim(),
          message: message.trim(),
          token
        })

        console.log("Valid!")
        console.log(data)

        const error = Math.random() > 0.5 ? true : false
        setTimeout(() => {
          if (!error) {
            setFormSubmitResult(
              {
                status: "success",
                message: successLocales
              }
            )
          } else {
            setFormSubmitResult(
              {
                status: "error",
                message: errorLocales
              }
            )
          }
          setSubmittingForm(false)
          setFullname("")
          setEmail("")
          setMessage("")
          setFormIsValidated(false)
        }, 1000)
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
                (!formIsValidated) ? "" : (errorFullname ? "error" : "success"),
                "appearance-none block w-full py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              )}
              placeholder={fullnameLocales.placeholder}
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />

            {formIsValidated && errorFullname && (
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
                (!formIsValidated) ? "" : (errorEmail ? "error" : "success"),
                "appearance-none block w-full py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
              )}
              placeholder={emailLocales.placeholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {formIsValidated && errorEmail && (
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
              (!formIsValidated) ? "" : (errorMessage ? "error" : "success"),
              "appearance-none block w-full py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
            )}
            placeholder={messageLocales.placeholder}
            maxLength="500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {formIsValidated && errorMessage && (
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

        <div className="result-group mb-3">
          <Button
            type="submit"
            classes={classNames(
              "focus:outline-none py-2 px-4 rounded-full mr-4"
            )}
            disabled={submittingForm}
          >
            {buttonLocales.text}
          </Button>

          {formSubmitResult && (
          <p
            className={classNames(
              formSubmitResult.status === "success" ? "success" : "error",
              "form-result text-sm"
            )}
          >
            {formSubmitResult.message}
          </p>
        )}
        </div>
      </form>
    </div>
  )
}

export default Form
