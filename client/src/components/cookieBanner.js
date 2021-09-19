import * as React from "react"
import {
  useTranslation,
  Trans,
  Link,
  useI18next,
} from "gatsby-plugin-react-i18next"
import CookieConsent from "react-cookie-consent"

import "../styles/components/cookieBanner.scss"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

const CookieBanner = () => {
  const { originalPath } = useI18next()

  const { t } = useTranslation()
  const bannerTranslations = t("cookie-banner", {
    returnObjects: true,
  })
  const { text, acceptButton } = bannerTranslations

  return (
    <CookieConsent
      location="bottom"
      buttonText={acceptButton}
      cookieName="cookies_agreed"
      expires={90}
      containerClasses={classNames(
        originalPath !== "/" ? "not-front-page" : "",
        "cookie-banner-wrapper"
      )}
      buttonWrapperClasses="cookie-banner-btn-wrapper"
      buttonClasses="cookie-banner-accept-btn rounded-full"
      contentClasses="cookie-banner-content"
      overlayClasses="cookie-banner-overlay"
      disableStyles={true}
    >
      <p>
        <Trans
          components={{
            1: (
              <Link to="/politica-cookies/" className="more-info-link">
                link
              </Link>
            ),
          }}
        >
          {text}
        </Trans>
      </p>
    </CookieConsent>
  )
}

export default CookieBanner
