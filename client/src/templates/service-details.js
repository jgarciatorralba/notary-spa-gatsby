import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/templates/service-details.scss"

const ServiceDetails = ({ data }) => {
  const { title: service, image } = data.markdownRemark.frontmatter
  const pluginImage = getImage(image)

  const { t } = useTranslation()
  const serviceTranslations = t(service, {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title } = serviceTranslations

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="service-details-image">
        <GatsbyImage image={pluginImage} alt="" />
      </div>
      <div className="service-details-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 lg:py-8">
        <p>{title}</p>
      </div>
    </Layout>
  )
}

export default ServiceDetails

export const query = graphql`
  query($language: String!, $slug: String) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        image {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
