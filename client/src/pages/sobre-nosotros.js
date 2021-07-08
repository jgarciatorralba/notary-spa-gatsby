import * as React from "react"
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

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

      <div className="block-intro">
        <h2>
          <Trans i18nKey={header} />
        </h2>
        <p>{summary}</p>
      </div>

      <div className="block-values">
        {companyValues.map(value => (
          <div key={value.valueName} className="value-item">
            <h3>{value.valueName}</h3>
            <p>{value.valueDescription}</p>
          </div>
        ))}
      </div>

      <div className="block-team">
        {team.map(employee =>
          employee.isNotary === "Yes" ? (
            <div key={employee.name} className="team-member notary">
              <h2>{employee.name}</h2>
              <ul>
                {employee.highlights.map(highlight => (
                  <li>{highlight}</li>
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

      <Link to="/">Go back to the homepage</Link>
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
