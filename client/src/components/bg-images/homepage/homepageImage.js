import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import "../../../styles/components/bg-images/homepage/homepageImage.scss"

const HomepageImage = ({ children }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "demo/homepage/hero_signature.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 100
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )

  const pluginImage = getImage(image)

  return <BgImage image={pluginImage} className="hero-wrapper">
    {children}
  </BgImage>
}

export default HomepageImage