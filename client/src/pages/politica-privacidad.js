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
  const contactDetailsTranslations = t("contact-details", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const {
    companyName,
    companyId,
    email,
    address,
    phone,
  } = contactDetailsTranslations
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
              <Trans
                i18nKey={dataTreatment.contactDetails.companyName}
                values={{
                  companyName: companyName,
                }}
              />
              <br />

              <Trans
                i18nKey={dataTreatment.contactDetails.id}
                values={{
                  companyId: companyId,
                }}
              />
              <br />

              <Trans
                i18nKey={dataTreatment.contactDetails.email}
                components={{
                  1: <a href={`mailto:${email}`}>email</a>,
                }}
                values={{
                  email: email,
                }}
              />
              <br />

              <Trans
                i18nKey={dataTreatment.contactDetails.address}
                values={{
                  street: address.street,
                  zipCode: address.zipCode,
                }}
              />
              <br />

              <Trans
                i18nKey={dataTreatment.contactDetails.phone}
                values={{
                  firstPhone: `+34 ${phone.numbers[0]}`,
                  secondPhone: `+34 ${phone.numbers[1]}`,
                }}
              />
            </p>
          </>
        )}

        {purpose && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{purpose.title}</h3>
            {purpose.texts.map(text => {
              return text.elements.map((element, index) => {
                return (
                  <p key={`purpose-paragraph-${index}`} className="mb-2">
                    {element}
                  </p>
                )
              })
            })}
          </>
        )}

        {conservation && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{conservation.title}</h3>
            {conservation.texts.map(text => {
              return text.elements.map((element, index) => {
                return (
                  <p key={`conservation-paragraph-${index}`} className="mb-2">
                    {element}
                  </p>
                )
              })
            })}
          </>
        )}

        {dataProtectionOfficer && (
          <>
            <h3 className="mb-2 mt-4 font-bold">
              {dataProtectionOfficer.title}
            </h3>
            {dataProtectionOfficer.texts.map(text => {
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
            })}
          </>
        )}

        {userResponsibility && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{userResponsibility.title}</h3>
            {userResponsibility.texts.map(text => {
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
