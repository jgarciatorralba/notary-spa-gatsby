import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import "../../../styles/components/bg-images/about/copyistImage.scss"

const CopyistImage = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "demo/about/team/copyist.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 1200
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

  return <BgImage image={pluginImage} className="copyist-bg-image mb-2" />
}

export default CopyistImage
