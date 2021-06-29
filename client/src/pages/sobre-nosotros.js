import * as React from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
  const { t } = useTranslation()
  const aboutTranslations = t("about", {
    returnObjects: true,
  })

  const { title, header, summary } = aboutTranslations

  return (
    <Layout>
      <Seo pageTitle={title} />

      <h1>
        <Trans
          i18nKey={header}
        />
      </h1>
      <p>{summary}</p>

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

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
