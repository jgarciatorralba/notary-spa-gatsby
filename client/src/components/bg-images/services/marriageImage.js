import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import "../../../styles/components/bg-images/services/marriageImage.scss"

const MarriageImage = ({ children, classes }) => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "demo/services/marriage.jpg" }) {
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

  return (
    <BgImage
      image={pluginImage}
      className={`${classes} marriage-bg-image`}
    >
      {children}
    </BgImage>
  )
}

export default MarriageImage
