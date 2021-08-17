/**
 * This file lets you respond to Gatsby-specific events within the browser,
 * and wrap your page components in * additional global components.
 * The Gatsby Browser API gives you many options for interacting with the client-side of Gatsby.
 */

import * as React from "react"
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import "./src/styles/global.scss"

import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"

export const wrapRootElement = ({ element }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.RECAPTCHA_V3_SITE_KEY}
    >
      {element}
    </GoogleReCaptchaProvider>
  )
}
