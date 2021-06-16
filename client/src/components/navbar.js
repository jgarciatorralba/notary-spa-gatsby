import * as React from "react"
import { useState, useRef } from "react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Logo from "../images/demo/logo/emblem.png"

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
  const [windowHeight, setWindowHeight] = useState(0)

  const mobilePanelRef = useRef(null)

  function handleClick() {
    setOpen(!open)

    const wrapper = mobilePanelRef.current
    wrapper.classList.toggle("is-open")
  }

  function toggleOpen() {
    setOpen(!open)
    // setWindowHeight(window.scrollY)

    if (!open) {
      // document.body.style.position = "fixed"
      // document.body.style.overflow = "hidden"
    } else {
      // document.body.style.position = "relative"
      // document.body.style.overflow = "visible"
      // window.scrollTo(0, windowHeight)
      // setWindowHeight(0)
    }
  }

  return (
    <nav className="sticky top-0 bg-transparent sm:bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              // onClick={toggleOpen}
              onClick={handleClick}
            >
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src={Logo}
                alt="Company logo"
              />
              <p className="hidden lg:block h-8 w-auto logo-text">{title}</p>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      item.to === originalPath ||
                        (originalPath.includes(item.to) && item.to !== "/")
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
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
                  lng === language ? "text-white" : "text-gray-300",
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
      {/* {open && ( */}
      <div className="sm:hidden">
        <div
          ref={mobilePanelRef}
          className="custom-mobile-panel px-2 pt-2 pb-3 min-w-full fixed bg-gray-800 z-50 flex flex-col justify-center content-center items-center"
        >
          {navigation.map(item => (
            <Link
              key={item.name}
              to={item.to}
              className={classNames(
                item.to === originalPath ||
                  (originalPath.includes(item.to) && item.to !== "/")
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "w-3/4 my-2 block px-3 py-2 rounded-full text-base text-center font-medium"
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
      {/* )} */}
    </nav>
  )
}

export default Navbar
