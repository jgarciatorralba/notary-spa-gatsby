import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../../styles/components/cards/notaryCard.scss"

const NotaryCard = ({ name, bio, highlights }) => {
  return (
    <div className="team-member notary">
      <div className="section-picture p-4 flex items-center">
        <StaticImage
          src="../../assets/images/demo/about/team/notary.jpg"
          alt=""
          placeholder="blurred"
          quality={90}
        />
      </div>
      <div className="section-description p-4">
        <h3 className="text-xl mb-4">{name}</h3>
        <p className="mb-4">{bio}</p>
        <ul className="list-disc ml-8">
          {highlights.map((highlight, index) => (
            <li className="mb-1" key={index}>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NotaryCard
