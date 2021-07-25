import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Slider from "react-slick"

import NotaryCard from "./notaryCard"
import MemberCard from "./memberCard"

import "../styles/components/teamSlider.scss"

const TeamSlider = () => {
  const { t } = useTranslation()
  const aboutTranslations = t("about", {
    returnObjects: true,
  })

  let { header, members } = aboutTranslations.team

  members.forEach(member => {
    member.isNotary =
      member.position === "Notario" || member.position === "Notari"
        ? true
        : false
  })

  const settings = {
    dots: true,
    arrows: false,
  }

  return (
    <div className="block-team mb-4">
      <h2 className="mb-2 font-bold">{header}</h2>

      <Slider className="slider" {...settings}>
        {members.map(member =>
          member.isNotary ? (
            <NotaryCard
              key={member.name}
              name={member.name}
              bio={member.bio}
              highlights={member.highlights}
            />
          ) : (
            <MemberCard
              key={member.contact}
              name={member.name}
              position={member.position}
              contact={member.contact}
            />
          )
        )}
      </Slider>
    </div>
  )
}

export default TeamSlider
