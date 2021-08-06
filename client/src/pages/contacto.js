import * as React from "react"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/pages/contacto.scss"

const ContactPage = () => {
  const { language } = useI18next()
  const map = {
    baseUrl: process.env.GATSBY_MAPS_EMBED_BASE_URL,
    mode: "place",
    apiKey: process.env.GATSBY_MAPS_EMBED_API_KEY,
    marker: encodeURI("Notaria+Jorge+Míngez+Balaguer"),
    zoom: 16,
  }

  const { t } = useTranslation()
  const contactTranslations = t("contact", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, header } = contactTranslations

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="contact-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h2 className="mb-2">
          {header}
        </h2>

        <div className="section-map my-4">
          <iframe
            title="test"
            src={`${map.baseUrl}${map.mode}?key=${map.apiKey}&q=${map.marker}&zoom=${map.zoom}&language=${language}`}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </Layout>
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
