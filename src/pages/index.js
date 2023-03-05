import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home" children = "This is the home page">

    </Layout>
  )
}

export const Head = () => <Seo title="Home page" />

export default IndexPage