import * as React from "react"
import { Fragment } from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { ChevronDownIcon } from "@heroicons/react/outline"

import "../../styles/components/accordion-elements/accordionItem.scss"

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  highlighted,
  item,
  index,
  onClick,
}) => {
  const answers = item.answers ?? null
  const consideration = item.consideration ?? null

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
          <ChevronDownIcon className="chevron-down-icon" />
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

          {consideration && (
            <div className="accordion-item-consideration my-4 mx-4 sm:mx-8">
              <h3 className="mb-2 font-bold">{consideration.title}</h3>

              {consideration.answers.map((answer, answerIndex) => (
                <Fragment key={`consideration-answer-${answerIndex}`}>
                  {answer.type === "list" && (
                    <ul>
                      {answer.sentences.map((sentence, listIndex) => (
                        <li key={`consideration-sentence-${listIndex}`}>
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
                        <p
                          key={`consideration-sentence-${paragraphIndex}`}
                          className="py-2"
                        >
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
      )}
    </div>
  )
}

export default AccordionItem
