import * as React from "react"
import { Fragment } from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { ChevronLeftIcon } from "@heroicons/react/outline"

import "../../styles/components/accordion-elements/accordion-item.scss"

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  highlighted,
  item,
  index,
  onClick,
}) => {
  const answers = item.answers ?? null

  return (
    <div className="accordion-item">
      <div className="accordion-item-question py-2">
        <button
          aria-expanded={ariaExpanded}
          aria-controls={`accordion-item-${index + 1}-description`}
          data-qa="accordion-item-question-button"
          className={`accordion-item-question-button ${highlighted}`}
          onClick={onClick}
        >
          <p>{item.question}</p>
          <ChevronLeftIcon className="chevron-left-icon" />
        </button>
      </div>

      {answers && (
        <div
          id={`accordion-item-${index + 1}-description`}
          data-qa="accordion-item-description"
          className={`accordion-item-description ${showDescription}`}
        >
          {answers.map((answer, answerIndex) => (
            <Fragment key={`answer-${answerIndex}`}>
              {answer.type === "list" && (
                <ul>
                  {answer.sentences.map((sentence, listIndex) => (
                    <li key={`sentence-${listIndex}`}>
                      <p className="py-2">
                        <Trans>{sentence}</Trans>
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {answer.type === "paragraph" && (
                <>
                  {answer.sentences.map((sentence, paragraphIndex) => (
                    <p key={`sentence-${paragraphIndex}`} className="py-2">
                      <Trans>{sentence}</Trans>
                    </p>
                  ))}
                </>
              )}
            </Fragment>
          ))}
        </div>
      )}
    </div>
  )
}

export default AccordionItem
