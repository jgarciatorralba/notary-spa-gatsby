import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { useI18next } from "gatsby-plugin-react-i18next"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Map from "../components/map"
import Form from "../components/form/form"

import "../styles/pages/contacto.scss"

const ContactPage = () => {
  const { t } = useTranslation()
  const contactTranslations = t("contact", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, header, iframe, form } = contactTranslations
  const { inputs, button, success, error } = form

  const { language } = useI18next()

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.GATSBY_RECAPTCHA_V3_SITE_KEY}
      language={language}
    >
      <Layout>
        <Seo
          defaultTitle={defaultTitle}
          pageTitle={title}
          description={description}
        />

        <div className="contact-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
          <h2 className="mb-2 font-bold">
            {header}
          </h2>

          <div className="sections-wrapper">
            <Map
              iframeTitle={iframe.title}
            />

            <Form
              inputsLocales={inputs}
              buttonLocales={button}
              successLocales={success}
              errorLocales={error}
              language={language}
            />
          </div>
        </div>
      </Layout>
    </GoogleReCaptchaProvider>
  )
}

export default ContactPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
