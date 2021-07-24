import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ValueCard from "../components/valueCard"
import NotaryCard from "../components/notaryCard"
import MemberCard from "../components/memberCard"

import "../styles/pages/sobre-nosotros.scss"

const AboutPage = () => {
  const { t } = useTranslation()
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })
  const aboutTranslations = t("about", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, header, summary, companyValues, team } = aboutTranslations
  let { members } = team

  members.forEach(member => {
    member.isNotary =
      member.position === "Notario" || member.position === "Notari"
        ? true
        : false
  })

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />
      <div className="about-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="block-intro mb-4">
          <h2 className="mb-2">
            <strong>{header.businessName}</strong>{" "}
            <span>{header.businessLocation}</span>
          </h2>
          <p className="mb-2">{summary}</p>
        </div>

        <div className="block-values mb-4 mx-4 sm:mx-0">
          {companyValues.map(value => (
            <ValueCard
              key={value.valueKey}
              valueKey={value.valueKey}
              valueName={value.valueName}
              valueDescription={value.valueDescription}
            />
          ))}
        </div>

        <div className="block-team mb-4">
          <h2 className="mb-2 font-bold">{team.header}</h2>
          {team.members.map(member =>
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
                position={member.positon}
                contact={member.contact}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
