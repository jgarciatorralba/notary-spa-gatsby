import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Accordion from "../components/accordion"

import "../styles/templates/service-details.scss"

const ServiceDetails = ({ data }) => {
  const { title: service, image } = data.markdownRemark.frontmatter
  const pluginImage = getImage(image)

  const { t } = useTranslation()
  const serviceTranslations = t(service, {
    returnObjects: true,
  })
  const serviceSharedTranslations = t("service-details", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, items } = serviceTranslations
  const { heading } = serviceSharedTranslations

  let bgPosition
  if (service === "marriage") {
    bgPosition = "50% 35%"
  } else if (service === "corporate") {
    bgPosition = "50% 25%"
  } else if (service === "last-will") {
    bgPosition = "50% 45%"
  } else if (service === "real-estate") {
    bgPosition = "50% 37.5%"
  } else if (service === "power-of-attorney") {
    bgPosition = "50% 75%"
  } else {
    bgPosition = "50% 50%"
  }

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="service-details-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h2 className="mb-2 font-bold">{title}</h2>

        <BgImage
          image={pluginImage}
          className="service-details-image"
          style={{ backgroundPosition: bgPosition }}
        />

        {items && <Accordion items={items} heading={heading} />}
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
