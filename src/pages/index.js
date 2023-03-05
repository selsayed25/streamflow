import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import {
  paragraph,
  smallHeading,
} from "../components/layout.module.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home" children="The Home page">
        <b/>
        <p className={ paragraph }>Welome to Streamflow, a website where we make complex data, into a more user-friendly way for people of all to use.</p>
        <a className={smallHeading} href="https://selsayed25-didactic-rotary-phone-qgxpq4qqpxjc4pg-8000.preview.app.github.dev/data-map/">Check out our data map!</a>
    </Layout>
  )
}

export const Head = () => <Seo title="Home page" />

export default IndexPage