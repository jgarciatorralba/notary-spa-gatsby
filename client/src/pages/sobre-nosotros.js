import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ValueCard from "../components/valueCard"

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
          {team.map(employee =>
            employee.isNotary === "Yes" ? (
              <div key={employee.name} className="team-member notary">
                <h2>{employee.name}</h2>
                <ul>
                  {employee.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div key={employee.name} className="team-member">
                <h3>{employee.name}</h3>
                <p>{employee.position}</p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={`mailto:${employee.contact}`}
                >
                  {employee.contact}
                </a>
              </div>
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
