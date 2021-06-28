import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/pages/index.scss"

const IndexPage = () => {
  const { t } = useTranslation()
  const homepageTranslations = t("home", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle } = metaTranslations
  const { header } = homepageTranslations

  return (
    <Layout>
      <Seo defaultTitle={defaultTitle} />
      <div className="hero-wrapper">
        <h1 className="page-main-title text-white text-center font-bold px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4">
          {header}
        </h1>

        <StaticImage
          src="../images/demo/homepage/hero_signature.jpg"
          alt=""
          placeholder="blurred"
          quality={100}
        />
      </div>
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
