import * as React from "react"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"

import "../styles/components/footer.scss"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Footer = () => {
  const { t } = useTranslation()
  const { originalPath } = useI18next()

  const { companyName, email, address, phone } = t("contact", {
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

  let contact = [
    { name: "company name", value: companyName },
    { name: "email", value: email },
    { name: "street", value: address.street },
    { name: "zip code", value: address.zipCode },
  ]
  for (let i = 0; i < phone.numbers.length; i++) {
    contact = [...contact, { name: `phone-${i + 1}`, value: phone.numbers[i] }]
  }

  return (
    <footer className="footer-wrapper">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="contact-wrapper flex flex-wrap justify-center py-4">
          {contact.map(item => {
            if (item.name === "email") {
              return (
                <div
                  key={item.name}
                  className="flex-shrink-0 px-2 sm:px-3 py-0 self-center flex"
                >
                  <a
                    href={`mailto:${item.value}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium self-center text-sm hover:text-white"
                  >
                    {item.value}
                  </a>
                </div>
              )
            } else if (item.name === "phone-1") {
              return (
                <div
                  key={item.name}
                  className="phone-section flex-shrink-0 px-2 sm:px-3 py-0 self-center flex"
                >
                  <span className="phone-abbreviation font-medium text-sm self-center">{phone.abbreviation}</span>
                  <a
                    href={`tel:${item.value}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium self-center text-sm hover:text-white"
                  >
                    {item.value}
                  </a>
                </div>
              )
            } else if (item.name === "phone-2") {
              return (
                <div
                  key={item.name}
                  className="phone-number flex-shrink-0 px-2 sm:px-3 py-0 self-center flex"
                >
                  <a
                    href={`tel:${item.value}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium self-center text-sm hover:text-white"
                  >
                    {item.value}
                  </a>
                </div>
              )
            } else {
              return (
                <div
                  key={item.name}
                  className={classNames(
                    item.name === "company name"
                      ? "font-bold w-full sm:w-auto text-center sm:text-justify"
                      : "font-medium",
                    "flex-shrink-0 text-sm px-2 sm:px-3 py-0 self-center"
                  )}
                >
                  {item.value}
                </div>
              )
            }
          })}
        </div>
        <div className="links-wrapper flex flex-wrap justify-center sm:justify-between">
          <div className="flex justify-around sm:justify-evenly">
            {navigation.map(item => (
              <Link
                key={item.name}
                to={item.to}
                className={classNames(
                  item.to === originalPath ||
                    (originalPath.includes(item.to) && item.to !== "/")
                    ? "text-white"
                    : "hover:text-white",
                  "mx-3 pt-4 pb-4 text-xs font-medium"
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
          <div className="hidden sm:block text-xs font-medium mx-3 pt-4 pb-4">
            © {new Date().getFullYear()}
            {` `}
            {companyName}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
