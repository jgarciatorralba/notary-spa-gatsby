import * as React from "react"
import { Fragment } from "react"
import { Trans } from "gatsby-plugin-react-i18next"
import { ChevronLeftIcon } from "@heroicons/react/outline"

import "../../styles/components/accordion-elements/accordion-item.scss"

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => {
  const answers = item.answers ?? null

  return (
    <div className="faq__question" key={item.question}>
      <div>
        <button
          aria-expanded={ariaExpanded}
          aria-controls={`faq${index + 1}_desc`}
          data-qa="faq__question-button"
          className={`faq__question-button ${fontWeightBold}`}
          onClick={onClick}
        >
          <p>{item.question}</p>
          <ChevronLeftIcon className="" />
        </button>
      </div>

      {answers && (
        <div
          id={`faq${index + 1}_desc`}
          data-qa="faq__desc"
          className={`faq__desc ${showDescription}`}
        >
          {answers.map((answer, answerIndex) => (
            <Fragment key={`answer-${answerIndex}`}>
              {answer.type === "list" && (
                <ul>
                  {answer.sentences.map((sentence, listIndex) => (
                    <li key={`sentence-${listIndex}`}>
                      <p>
                        <Trans>{sentence}</Trans>
                      </p>
                    </li>
                  ))}
                </ul>
              )}

              {answer.type === "paragraph" && (
                <>
                  {answer.sentences.map((sentence, paragraphIndex) => (
                    <p key={`sentence-${paragraphIndex}`}>
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
