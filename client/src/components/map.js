import * as React from "react"
import { useI18next } from "gatsby-plugin-react-i18next"

import "../styles/components/map.scss"

const Map = ({ iframeTitle }) => {
  const { language } = useI18next()
  const map = {
    baseUrl: process.env.GOOGLE_MAPS_EMBED_BASE_URL,
    mode: "place",
    apiKey: process.env.GOOGLE_MAPS_EMBED_API_KEY,
    marker: encodeURI("Notaria+Jorge+Míngez+Balaguer"),
    zoom: 16,
  }

  return (
    <div className="section-map mb-8 sm:mb-4">
      <iframe
        title={iframeTitle}
        src={`${map.baseUrl}${map.mode}?key=${map.apiKey}&q=${map.marker}&zoom=${map.zoom}&language=${language}`}
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}

export default Map
