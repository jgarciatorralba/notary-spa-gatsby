import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/pages/contacto.scss"

const ContactPage = () => (
  <Layout>
    <Seo title="Contact" />

    <div className="map-wrapper max-w-7xl mx-auto">
      <div className="section-map">
        <iframe
          title="test"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.2748840388363!2d2.250423215442717!3d41.92994427921816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a5271b2872b4d9%3A0x1f9e555b6791a88c!2sNotaria%20Jorge%20M%C3%ADngez%20Balaguer!5e0!3m2!1ses!2ses!4v1627831870018!5m2!1ses!2ses"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>

  </Layout>
)

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
