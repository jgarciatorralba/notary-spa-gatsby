import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
