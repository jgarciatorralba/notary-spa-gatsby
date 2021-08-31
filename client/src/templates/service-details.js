import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import "../styles/templates/service-details.scss"

const ServiceDetails = ({ data }) => {
  const { title, image } = data.markdownRemark.frontmatter
  const pluginImage = getImage(image)

  return (
    <Layout>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <GatsbyImage image={pluginImage} />
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
