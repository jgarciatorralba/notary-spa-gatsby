import * as React from "react"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

const Footer = () => {
  const { t } = useTranslation()

  const { language, languages, originalPath } = useI18next()
  const { companyName, email, address, phones } = t("contact", {
    returnObjects: true,
  })
  const {
    legalNotice: legal,
    privacyPolicy: privacy,
    cookiePolicy: cookies,
  } = t("footer", {
    returnObjects: true,
  })

  const navigation = [
    { name: legal, to: "/aviso-legal/" },
    { name: privacy, to: "/politica-privacidad/" },
    { name: cookies, to: "/politica-cookies/" },
  ]

  console.log(companyName)
  console.log(email)
  console.log(address)
  console.log(phones)

  return (
    <footer
      className="bg-gray-800"
      style={{
        marginTop: `2rem`,
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>
    </footer>
  )
}

export default Footer
