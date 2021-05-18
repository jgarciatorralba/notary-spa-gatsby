import * as React from "react"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Footer = () => {
  const { t } = useTranslation()
  const { originalPath } = useI18next()

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
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between">
        <div className="hidden sm:block text-gray-300 text-xs font-medium mx-3 py-4">
          © {new Date().getFullYear()}
          {` `}
          {companyName}
        </div>
        <div className="flex justify-around sm:justify-evenly">
          {navigation.map(item => (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                item.to === originalPath ||
                  (originalPath.includes(item.to) && item.to !== "/")
                  ? "text-white"
                  : "text-gray-300 hover:text-white",
                "mx-3 py-4 text-xs font-medium"
              )}
              aria-current={
                item.to === originalPath ||
                (originalPath.includes(item.to) && item.to !== "/")
                  ? "page"
                  : undefined
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
