import * as React from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
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

  const { title } = homepageTranslations

  return (
    <Layout>
      <Seo title={title} />
      <h1 className="bg-green-500">
        <Trans>Hi people</Trans>
      </h1>
      <p className="test">
        <Trans>Welcome to your new Gatsby site.</Trans>
      </p>
      <p>
        <Trans>Now go build something great.</Trans>
      </p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
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
