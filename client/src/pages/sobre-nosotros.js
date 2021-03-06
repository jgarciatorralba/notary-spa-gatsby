import * as React from "react"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ValueCard from "../components/cards/valueCard"
import TeamSlider from "../components/teamSlider"

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
  const { title, header, summary, companyValues } = aboutTranslations

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
            <Trans>{header}</Trans>
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

        <TeamSlider />
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
