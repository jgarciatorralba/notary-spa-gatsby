import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import HomepageImage from "../components/bgImages/homepageImage"

import "../styles/pages/index.scss"

const IndexPage = () => {
  const { t } = useTranslation()
  const homepageTranslations = t("home", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, header } = homepageTranslations

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />
      <HomepageImage>
        <h1 className="page-main-title text-center font-bold px-3 sm:px-4 lg:px-6 py-1 sm:py-2">
          {header}
        </h1>
      </HomepageImage>
    </Layout>
  )
}

export default IndexPage

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
