import * as React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <h1>About</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage

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
