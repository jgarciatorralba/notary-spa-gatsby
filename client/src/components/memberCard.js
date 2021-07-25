import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import EnvelopeIcon from "../assets/svgs/about/team/envelope.svg"

import "../styles/components/memberCard.scss"

const MemberCard = ({ name, position, contact }) => {
  return (
    <div className="team-member px-4 pt-4 pb-6 text-center mx-auto my-4">
      {contact.includes("laura") && (
        <StaticImage
          src="../assets/images/demo/about/team/officer.jpg"
          alt=""
          placeholder="blurred"
          quality={70}
          className="mb-2"
        />
      )}
      {contact.includes("emilio") && (
        <StaticImage
          src="../assets/images/demo/about/team/administration.jpg"
          alt=""
          placeholder="blurred"
          quality={70}
          className="mb-2"
        />
      )}
      {contact.includes("gemma") && (
        <StaticImage
          src="../assets/images/demo/about/team/copyist.jpg"
          alt=""
          placeholder="blurred"
          quality={70}
          className="mb-2"
        />
      )}
      <h3 className="text-xl">{name}</h3>
      <p className="uppercase mb-4">{position}</p>
      <a
        rel="noreferrer"
        target="_blank"
        href={`mailto:${contact}`}
        className="my-2 px-4 py-2 rounded-full"
      >
        <EnvelopeIcon /> {contact}
      </a>
    </div>
  )
}

export default MemberCard
