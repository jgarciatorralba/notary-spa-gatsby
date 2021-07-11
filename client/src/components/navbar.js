import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/components/navbar.scss"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const Navbar = () => {
  const { t } = useTranslation()

  const { language, languages, originalPath } = useI18next()
  const { title } = t("metadata", { returnObjects: true })
  const { main, about, contact, services } = t("navbar", {
    returnObjects: true,
  })

  const navigation = [
    { name: main, to: "/" },
    { name: about, to: "/sobre-nosotros/" },
    { name: services, to: "/servicios/" },
    { name: contact, to: "/contacto/" },
  ]

  const [open, setOpen] = useState(false)
  const mobilePanelRef = useRef(null)
  const navbarRef = useRef(null)

  function handleClick() {
    setOpen(!open)

    const wrapper = mobilePanelRef.current
    wrapper.classList.toggle("is-open")
  }

  function listenToScroll() {
    const NAVBAR_HEIGHT = 64
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    const navbar = navbarRef.current

    if (windowScroll >= NAVBAR_HEIGHT / 2) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll)

    return () => {
      window.removeEventListener("scroll", listenToScroll)
    }
  }, [])

  return (
    <nav
      ref={navbarRef}
      className={classNames(
        originalPath === "/" ? "is-front-page" : "",
        "navbar-wrapper sticky top-0"
      )}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="mobile-button absolute inset-y-0 left-0 flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="x-icon block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon
                  className="menu-icon block h-6 w-6"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <StaticImage
                src="../images/demo/logo/emblem.png"
                className="logo block lg:hidden h-8 w-auto"
                alt=""
                placeholder="blurred"
                quality={100}
                height={32}
              />
              <p className="logo-text hidden lg:block h-8 w-auto">{title}</p>
            </div>
            <div className="navigation sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.to === originalPath ||
                        (originalPath.includes(item.to) && item.to !== "/")
                        ? "is-current"
                        : "is-not-current",
                      "px-3 py-2 rounded-full text-sm font-medium"
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
          </div>
          <ul className="languages absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {languages.map(lng => (
              <li
                key={lng}
                className={classNames(
                  lng === language ? "text-white" : "",
                  "px-2 py-1"
                )}
              >
                <Link to={originalPath} language={lng}>
                  {lng}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mobile-navigation-wrapper">
        <div
          ref={mobilePanelRef}
          className="mobile-navigation px-2 pt-2 pb-3 min-w-full fixed flex flex-col justify-center content-center items-center"
        >
          {navigation.map(item => (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                item.to === originalPath ||
                  (originalPath.includes(item.to) && item.to !== "/")
                  ? "is-current"
                  : "is-not-current",
                "my-2 block px-3 py-2 rounded-full text-base text-center font-medium"
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
    </nav>
  )
}

export default Navbar
