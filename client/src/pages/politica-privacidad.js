import * as React from "react"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/pages/politica-privacidad.scss"

const PrivacyPolicyPage = () => {
  const { t } = useTranslation()
  const policyTranslations = t("privacy-policy", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, sections } = policyTranslations

  let test
  sections.forEach(section => {
    if (section.key === "data-protection-officer") {
      test = section.texts[0].elements[0]
    }
  })

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="privacy-policy-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h2 className="mb-2 font-bold">{title}</h2>
        <p>
          <Trans
            i18nKey={test}
            components={{ 1: <a href="mailto:mail.com">contact</a> }}
            values={{ contact: "jorge@mail.com" }}
          />
        </p>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage

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
