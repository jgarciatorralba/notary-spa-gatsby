import * as React from "react"
import { useTranslation, Trans } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../styles/pages/politica-cookies.scss"

const CookiePolicyPage = () => {
  const { t } = useTranslation()
  const policyTranslations = t("cookie-policy", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { header: title, sections } = policyTranslations
  const {
    intro,
    definition,
    classification,
    cookiesUsed,
    configuration,
    updates,
  } = sections
  const { managerEntity, timeActive, purpose } = classification.types
  const classificationTypes = [managerEntity, timeActive, purpose]

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="cookie-policy-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <h2 className="mb-2 font-bold">{title}</h2>

        {intro &&
          intro.texts.map((text, index) => {
            return (
              <p key={`intro-paragraph-${index}`} className="mb-2">
                {text}
              </p>
            )
          })}

        {definition && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{definition.title}</h3>
            {definition.texts.map((text, index) => {
              return (
                <p key={`definition-paragraph-${index}`} className="mb-2">
                  {text}
                </p>
              )
            })}
          </>
        )}

        {classification && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{classification.title}</h3>
            <ul>
              {classificationTypes.map((type, index) => (
                <li
                  key={`classification-list-item-${index}`}
                  className="first-level ml-8"
                >
                  <p className="mb-2 font-bold">{type.title}</p>
                  <ul>
                    {type.items.map((item, index) => (
                      <li key={`type-list-item-${index}`} className="ml-8">
                        <p className="mb-2">
                          <Trans>{item}</Trans>
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </>
        )}

        {cookiesUsed && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{cookiesUsed.title}</h3>
            <p className="mb-2">{cookiesUsed.intro}</p>
            <ul>
              {cookiesUsed.list.map((listItem, index) => (
                <li
                  className="ml-8 sm:ml-16"
                  key={`cookies-used-item-${index}`}
                >
                  <p className="mb-2">
                    <Trans>{listItem}</Trans>
                  </p>
                </li>
              ))}
            </ul>
            {cookiesUsed.outro.map((item, index) => (
              <p key={`cookies-outro-item-${index}`} className="mb-2">
                <Trans
                  components={{
                    1: (
                      <a
                        href={cookiesUsed.googleCookieTypesAddress}
                        target="_blank"
                        rel="noreferrer"
                      >
                        address
                      </a>
                    ),
                    2: (
                      <a
                        href={cookiesUsed.googleCookiePolicyAddress}
                        target="_blank"
                        rel="noreferrer"
                      >
                        address
                      </a>
                    ),
                  }}
                >
                  {item}
                </Trans>
              </p>
            ))}
          </>
        )}

        {configuration && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{configuration.title}</h3>
            <p className="mb-2">{configuration.intro}</p>
            <ul>
              {configuration.list.map((listItem, index) => (
                <li
                  key={`configuration-item-${index}`}
                  className="ml-8 sm:ml-16"
                >
                  <p className="mb-2">
                    <Trans
                      components={{
                        1: (
                          <a
                            href={listItem.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            address
                          </a>
                        ),
                      }}
                    >
                      {listItem.content}
                    </Trans>
                  </p>
                </li>
              ))}
            </ul>
          </>
        )}

        {updates && (
          <>
            <h3 className="mb-2 mt-4 font-bold">{updates.title}</h3>
            <p className="mb-2">{updates.intro}</p>
          </>
        )}
      </div>
    </Layout>
  )
}

export default CookiePolicyPage

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
