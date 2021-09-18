import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
import CookieConsent from "react-cookie-consent"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Layout = ({ children }) => {
  const { originalPath } = useI18next()

  const validPaths = [
    "/sobre-nosotros/",
    "/servicios/",
    "/servicios/tramites-inmobiliarios",
    "/servicios/donaciones",
    "/servicios/voluntades",
    "/servicios/tramites-societarios",
    "/servicios/tramites-financieros",
    "/servicios/poderes",
    "/servicios/tramites-matrimoniales",
    "/contacto/",
    "/aviso-legal/",
    "/politica-privacidad/",
    "/politica-cookies/",
  ]

  return (
    <>
      <Navbar />
      <main
        className={classNames(
          originalPath === "/"
            ? ""
            : !validPaths.includes(originalPath)
            ? "is-error-page"
            : ""
        )}
      >
        {children}
      </main>
      <Footer />

      <CookieConsent
        location="bottom"
        buttonText="Sure man!!"
        cookieName="cookies_agreed"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={180}
        overlay
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
