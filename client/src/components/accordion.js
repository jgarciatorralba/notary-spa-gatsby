import * as React from "react"
import { useState } from "react"

import AccordionItem from "./accordion-elements/accordion-item"

import "../styles/components/accordion.scss"

const Accordion = ({ items, heading }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const renderedItems = items.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : ""
    const fontWeightBold = index === activeIndex ? "font-bold" : ""
    const ariaExpanded = index === activeIndex ? "true" : "false"

    return (
      <AccordionItem
        key={item.question}
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(activeIndex === index ? null : index)
        }}
      />
    )
  })

  return (
    <div className="accordion-wrapper">
      <h2 className="mb-2 font-bold">{heading}</h2>
      <div className="accordion-list">{renderedItems}</div>
    </div>
  )
}

export default Accordion
