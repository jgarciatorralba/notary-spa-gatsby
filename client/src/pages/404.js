import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {
  const { t } = useTranslation()
  const notFoundTranslations = t("not-found", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, header, paragraph } = notFoundTranslations

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <h1>{header}</h1>
      <p>{paragraph}</p>
    </Layout>
  )
}

export default NotFoundPage

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
