import * as React from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const DonationsPage = () => (
  <Layout>
    <Seo title="Donations" />
    <h1>Donations</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DonationsPage
