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

  return (
    <Layout>
      <Seo defaultTitle={defaultTitle} />
      <div className="hero-wrapper">
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
