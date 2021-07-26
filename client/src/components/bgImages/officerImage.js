import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

import "../../styles/components/bgImages/officerImage.scss"

const OfficerImage = () => {
  const { image } = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "demo/about/team/officer.jpg" }) {
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

  return <BgImage image={pluginImage} className="officer-bg-image mb-2" />
}

export default OfficerImage
