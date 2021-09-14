import * as React from "react"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/pages/aviso-legal.scss"

const LegalNoticePage = () => {
  const { t } = useTranslation()
  const legalNoticeTranslations = t("legal-notice", {
    returnObjects: true,
  })
  const contactDetailsTranslations = t("contact-details", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { companyName, address } = contactDetailsTranslations
  const { header: title, sections } = legalNoticeTranslations
  const { purpose, conditions, law } = sections

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="legal-notice-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h2 className="mb-2 font-bold">{title}</h2>

        {purpose && (
          <>
            {purpose.texts.map(text => {
              return text.elements.map((element, index) => {
                return (
                  <p key={`purpose-paragraph-${index}`} className="mb-2">
                    <Trans
                      i18nKey={element}
                      values={{
                        companyName: companyName,
                        street: address.street,
                        zipCode: address.zipCode,
                      }}
                    />
                  </p>
                )
              })
            })}
          </>
        )}

        {conditions && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{conditions.title}</h3>
            {conditions.texts.map(text => {
              if (text.type === "paragraph") {
                return text.elements.map((element, index) => {
                  return (
                    <p key={`conditions-paragraph-${index}`} className="mb-2">
                      {element}
                    </p>
                  )
                })
              } else if (text.type === "list") {
                return (
                  <ul>
                    {text.elements.map((element, index) => {
                      return (
                        <li key={`conditions-list-${index}`} className="mb-2">
                          {element}
                        </li>
                      )
                    })}
                  </ul>
                )
              } else {
                return <></>
              }
            })}
          </>
        )}

        {law && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{law.title}</h3>
            {law.texts.map(text => {
              return text.elements.map((element, index) => {
                return (
                  <p key={`law-paragraph-${index}`} className="mb-2">
                    {element}
                  </p>
                )
              })
            })}
          </>
        )}
      </div>
    </Layout>
  )
}

export default LegalNoticePage

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
