import * as React from "react"

import EnvelopeIcon from "../assets/svgs/about/team/envelope.svg"
import AdministrationImage from "./bgImages/administrationImage"
import OfficerImage from "./bgImages/officerImage"
import CopyistImage from "./bgImages/copyistImage"

import "../styles/components/memberCard.scss"

const MemberCard = ({ name, position, contact }) => {
  return (
    <div className="team-member px-4 pt-4 pb-6 text-center mx-auto my-4">
      {contact.includes("laura") && <OfficerImage />}
      {contact.includes("emilio") && <AdministrationImage />}
      {contact.includes("gemma") && <CopyistImage />}
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
