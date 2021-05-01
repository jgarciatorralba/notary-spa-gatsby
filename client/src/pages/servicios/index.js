import * as React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ServicesPage = () => (
  <Layout>
    <Seo title="Services" />
    <h1>Services</h1>
    <Link to="/servicios/donaciones">Donations</Link>
    <br></br>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage

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
