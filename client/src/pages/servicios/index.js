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
  const { title, serviceList } = servicesTranslations

  let services = [
    {
      key: "corporate",
      to: "/servicios/tramites-societarios/"
    },
    {
      key: "donations",
      to: "/servicios/donaciones/"
    },
    {
      key: "finance",
      to: "/servicios/tramites-financieros/"
    },
    {
      key: "last-will",
      to: "/servicios/voluntades/"
    },
    {
      key: "marriage",
      to: "/servicios/tramites-matrimoniales/"
    },
    {
      key: "power-of-attorney",
      to: "/servicios/poderes/"
    },
    {
      key: "real-estate",
      to: "/servicios/tramites-inmobiliarios/"
    }
  ]

  services.forEach(service => {
    service.name = (serviceList.find(serviceListItem => service.key === serviceListItem.key)).name
  });

  return (
    <Layout>
      <Seo
        defaultTitle={defaultTitle}
        pageTitle={title}
        description={description}
      />

      <div className="services-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        {(services.map(service => (
          <Link
            key={service.key}
            to={service.to}
            className="service-card m-3"
          >
            <div className="w-full h-full p-8 border rounded bg-red-500 text-center flex justify-center items-center">{service.name}</div>
          </Link>
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
