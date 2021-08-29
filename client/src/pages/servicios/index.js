import * as React from "react"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import CorporateImage from "../../components/bg-images/services/corporateImage"
import DonationsImage from "../../components/bg-images/services/donationsImage"
import MarriageImage from "../../components/bg-images/services/marriageImage"
import FinanceImage from "../../components/bg-images/services/financeImage"
import LastWillImage from "../../components/bg-images/services/lastWillImage"
import PowerOfAttorneyImage from "../../components/bg-images/services/powerOfAttorneyImage"
import RealEstateImage from "../../components/bg-images/services/realEstateImage"

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

      <div className="services-wrapper max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 lg:py-8">
        {(services.map(service => (
          <Link
            key={service.key}
            to={service.to}
            className="service-card sm:m-3"
          >
            {(service.key === "corporate" &&
              <CorporateImage classes="w-full h-full p-8 text-center">
                <p>{service.name}</p>
              </CorporateImage>
            )}

            {(service.key === "donations" &&
              <DonationsImage classes="w-full h-full p-8 text-center">
                <p>{service.name}</p>
              </DonationsImage>
            )}

            {(service.key === "marriage" &&
              <MarriageImage classes="w-full h-full p-8 text-center">
                <p>{service.name}</p>
              </MarriageImage>
            )}

            {(service.key === "finance" &&
              <FinanceImage classes="w-full h-full p-8 text-center">
                <p>{service.name}</p>
              </FinanceImage>
            )}

            {(service.key === "last-will" &&
              <LastWillImage classes="w-full h-full p-8 text-center">
                <p>{service.name}</p>
              </LastWillImage>
            )}

            {(service.key === "power-of-attorney" &&
              <PowerOfAttorneyImage classes="w-full h-full p-8 text-center">
                <p>{service.name}</p>
              </PowerOfAttorneyImage>
            )}

            {(service.key === "real-estate" &&
              <RealEstateImage classes="w-full h-full p-8 text-center">
                <p>{service.name}</p>
              </RealEstateImage>
            )}
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
