import * as React from "react"

import EffectivenessIcon from "../images/demo/about/company_values/effectiveness.svg"
import ProfessionalismIcon from "../images/demo/about/company_values/professionalism.svg"
import ProximityIcon from "../images/demo/about/company_values/proximity.svg"

import "../styles/components/valueCard.scss"

const ValueCard = ({ valueKey, valueName, valueDescription }) => {
  return (
    <div className="value-item mb-4 mx-auto">
      <div className="card-header p-4">
        <span className="value-icon">
          {valueKey === "Effectiveness" && (
            <EffectivenessIcon className="mx-auto" />
          )}
          {valueKey === "Professionalism" && (
            <ProfessionalismIcon className="mx-auto" />
          )}
          {valueKey === "Proximity" && <ProximityIcon className="mx-auto" />}
        </span>
        <h3 className="value-name mt-2 font-bold text-center">{valueName}</h3>
      </div>

      <div className="card-body p-4">
        <p className="value-description text-sm">{valueDescription}</p>
      </div>
    </div>
  )
}

export default ValueCard
