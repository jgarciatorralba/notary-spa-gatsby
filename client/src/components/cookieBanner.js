import * as React from "react"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import CookieConsent from "react-cookie-consent"

import "../styles/components/cookieBanner.scss"

const CookieBanner = () => {
  const { t } = useTranslation()
  const bannerTranslations = t("cookie-banner", {
    returnObjects: true,
  })
  const { text, acceptButton, moreInfoLink } = bannerTranslations

  return (
    <CookieConsent
      location="bottom"
      buttonText={acceptButton}
      cookieName="cookies_agreed"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={90}
      containerClasses="cookie-banner-wrapper"
      buttonWrapperClasses="cookie-banner-btn-wrapper"
      buttonClasses="cookie-banner-accept-btn"
      contentClasses="cookie-banner-content"
      overlayClasses="cookie-banner-overlay"
      // disableStyles={true}
      debug={true}
      overlay
    >
      <p className="mb-2">{text}</p>
      <Link to="/politica-cookies/" className="more-info-link">
        {moreInfoLink}
      </Link>
    </CookieConsent>
  )
}

export default CookieBanner
