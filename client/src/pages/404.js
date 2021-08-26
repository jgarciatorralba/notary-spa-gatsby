import * as React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import NotFoundIcon from "../assets/svgs/404/not-found.svg"

import "../styles/pages/404.scss"

const NotFoundPage = () => {
  const { t } = useTranslation()
  const notFoundTranslations = t("not-found", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, header, paragraph } = notFoundTranslations

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="not-found-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 flex justify-center items-center">
        <div className="not-found-content h-full w-full">
          <div className="img-container">
            <NotFoundIcon className="mx-auto h-full max-w-full" />
          </div>
          <div className="text-container flex items-center">
            <div>
              <h1 className="mb-2 font-bold">{header}</h1>
              <p>{paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

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
