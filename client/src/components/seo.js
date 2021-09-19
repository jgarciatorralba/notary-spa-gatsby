import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

function Seo({ description, meta, pageTitle, defaultTitle }) {
  const { language } = useI18next()

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata?.description
  const metaDefaultTitle = defaultTitle || site.siteMetadata?.title
  const metaTitle = pageTitle || metaDefaultTitle

  return (
    <Helmet
      htmlAttributes={{
        lang: language,
      }}
      title={metaTitle}
      titleTemplate={
        metaTitle !== metaDefaultTitle
          ? `%s | ${metaDefaultTitle}`
          : metaDefaultTitle
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content:
            metaTitle !== metaDefaultTitle
              ? `${metaTitle}|${metaDefaultTitle}`
              : metaDefaultTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `author`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content:
            metaTitle !== metaDefaultTitle
              ? `${metaTitle}|${metaDefaultTitle}`
              : metaDefaultTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: site.siteMetadata.keywords.join(","),
        },
        {
          name: `robots`,
          content: `none`,
        },
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  pageTitle: PropTypes.string,
  defaultTitle: PropTypes.string,
}

export default Seo
