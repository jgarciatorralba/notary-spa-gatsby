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
  const { header: title, intro, sections } = policyTranslations
  const {
    dataTreatment,
    purpose,
    conservation,
    dataProtectionOfficer,
    userResponsibility,
  } = sections

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="privacy-policy-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h2 className="mb-2 font-bold">{title}</h2>
        <p className="mb-2">{intro}</p>

        {dataTreatment && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{dataTreatment.title}</h3>
            <p className="mb-2">
              {dataTreatment.contactDetails.companyName}
              <br />
              {dataTreatment.contactDetails.id.title}{" "}
              {dataTreatment.contactDetails.id.value}
              <br />
              {dataTreatment.contactDetails.email.title}{" "}
              <a href={`mailto:${dataTreatment.contactDetails.email.value}`}>
                {dataTreatment.contactDetails.email.value}
              </a>
              <br />
              {dataTreatment.contactDetails.address.title}{" "}
              {dataTreatment.contactDetails.address.street}
              {" - "}
              {dataTreatment.contactDetails.address.zipCode}
              <br />
              {dataTreatment.contactDetails.phone.title}{" "}
              {dataTreatment.contactDetails.phone.numbers.map(
                (number, index) => {
                  if (
                    index ===
                    dataTreatment.contactDetails.phone.numbers.length - 1
                  ) {
                    return number
                  } else {
                    return number + " | "
                  }
                }
              )}
            </p>
          </>
        )}

        {purpose && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{purpose.title}</h3>
            {purpose.texts.map(text => {
              if (text.type === "paragraph") {
                return text.elements.map((element, index) => {
                  return (
                    <p key={`purpose-paragraph-${index}`} className="mb-2">
                      {element}
                    </p>
                  )
                })
              } else if (text.type === "list") {
                return (
                  <ul>
                    {text.elements.map((element, index) => {
                      return (
                        <li key={`purpose-list-${index}`} className="mb-2">
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

        {conservation && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{conservation.title}</h3>
            {conservation.texts.map(text => {
              if (text.type === "paragraph") {
                return text.elements.map((element, index) => {
                  return (
                    <p key={`conservation-paragraph-${index}`} className="mb-2">
                      {element}
                    </p>
                  )
                })
              } else if (text.type === "list") {
                return (
                  <ul>
                    {text.elements.map((element, index) => {
                      return (
                        <li key={`conservation-list-${index}`} className="mb-2">
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

        {dataProtectionOfficer && (
          <>
            <h3 className="mb-2 mt-4 font-bold">
              {dataProtectionOfficer.title}
            </h3>
            {dataProtectionOfficer.texts.map(text => {
              if (text.type === "paragraph") {
                return text.elements.map((element, index) => {
                  return (
                    <p key={`dpo-paragraph-${index}`} className="mb-2">
                      <Trans
                        i18nKey={element}
                        components={{
                          1: (
                            <a href={`mailto:${dataProtectionOfficer.contact}`}>
                              contact
                            </a>
                          ),
                        }}
                        values={{ contact: dataProtectionOfficer.contact }}
                      />
                    </p>
                  )
                })
              } else {
                return <></>
              }
            })}
          </>
        )}

        {userResponsibility && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{userResponsibility.title}</h3>
            {userResponsibility.texts.map(text => {
              if (text.type === "paragraph") {
                return text.elements.map((element, index) => {
                  return (
                    <p
                      key={`user-responsibility-paragraph-${index}`}
                      className="mb-2"
                    >
                      {element}
                    </p>
                  )
                })
              } else if (text.type === "list") {
                return (
                  <ul>
                    {text.elements.map((element, index) => {
                      return (
                        <li
                          key={`user-responsibility-list-${index}`}
                          className="mb-2"
                        >
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
