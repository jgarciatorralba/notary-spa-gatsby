import * as React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "../../styles/pages/servicios/index.scss"

const ServicesPage = () => {
  const { t } = useTranslation()
  const servicesTranslations = t("services", {
    returnObjects: true,
  })
  const metaTranslations = t("metadata", {
    returnObjects: true,
  })

  const { title: defaultTitle, description } = metaTranslations
  const { title, serviceList: services } = servicesTranslations

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="services-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {(services.map(service => (
          <div className="service-card flex justify-center items-center p-8 m-4 border bg-red-500 text-center">
            {service.name}
          </div>
        )))}
      </div>
    </Layout>
  )
}

export default ServicesPage

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
