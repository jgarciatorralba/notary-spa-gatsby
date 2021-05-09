import * as React from "react"
import { Fragment } from "react"
import { Disclosure, Menu, Transition } from "@headlessui/react"
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline"
import { Link, useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import Logo from "../images/demo/emblem.png"

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
    { name: main, to: "/", current: true },
    { name: about, to: "/sobre-nosotros/", current: false },
    { name: services, to: "/servicios/", current: false },
    { name: contact, to: "/contacto/", current: false },
  ]

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={Logo}
                    alt="Company logo"
                  />
                  {/* <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}
                  <p className="hidden lg:block h-8 w-auto logo-text">
                    {title}
                  </p>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          // item.current
                          //item.to === context.originalPath
                          // item.to === context.originalPath ||
                          //   (context.originalPath.includes(item.to) &&
                          //     item.to !== "/")
                          item.to === originalPath ||
                            (originalPath.includes(item.to) && item.to !== "/")
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-full text-sm font-medium"
                        )}
                        aria-current={
                          // item.current
                          //item.to === context.originalPath
                          item.to === originalPath ||
                          (originalPath.includes(item.to) && item.to !== "/")
                            ? "page"
                            : undefined
                        }
                      >
                        {/* {item.name} */}
                        {/* <Trans>{`components.navbar.${item.name}`}</Trans> */}
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="languages absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}

                {/* Profile dropdown */}
                {/* <Menu as="div" className="ml-3 relative">
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          static
                          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu> */}
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
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-150"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-150"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Disclosure.Panel className="sm:hidden" static>
              <div className="custom-mobile-panel px-2 pt-2 pb-3 min-w-full fixed bg-gray-800 z-50 flex flex-col justify-center content-center items-center">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      // item.current
                      // item.to === context.originalPath
                      item.to === originalPath ||
                        (originalPath.includes(item.to) && item.to !== "/")
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "w-3/4 my-2 block px-3 py-2 rounded-full text-base text-center font-medium"
                    )}
                    aria-current={
                      // item.current
                      //item.to === context.originalPath
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
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
