import * as React from "react"
import {  Link, useStaticQuery, graphql } from "gatsby"
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    paragraph,
} from "./layout.module.css"
import { StaticImage } from "gatsby-plugin-image";

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
    `)

    return (
        <div className={container}>
            <center>
                <nav>
                    <ul className={navLinks}>

                        <li className={navLinkItem}>
                            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
                        </li>


                        <li>
                            <h1 style={{ color: "white" }}>
                                hello
                            </h1>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/" className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/about" className={navLinkText}>
                                About
                            </Link>
                        </li>
                        <li className={navLinkItem}>
                            <Link to="/data-map" className={navLinkText}>
                                Data Map
                            </Link>
                        </li>
                    </ul>
                </nav>
            </center>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                <p className={paragraph}>{children}</p>
            </main>
        </div>
    )
}

/*
import { graphql, StaticQuery, Helmet } from "gatsby"
import * as React from "react"
import Header from "./Header"


import Navigation from "./Navigation"

const Layout = ({ children }) => {
    return (
        <>
            <Navigation />
            <main>{ children }</main>
        </>
    )
}

export default Layout;


const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
        query SiteQuery {
            site {
                siteMetadata {
                    title
                    menuLinks {
                        name
                        link
                    }
                }
            }
        }
        `}
        render={data => (
            <React.Fragment>
                <Helmet
                    title={'title'}
                    meta={[
                        { name: 'description', content: 'sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                ></Helmet>
                <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
                <div
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '0px 1.0875rem 1.45rem',
                        paddingTop: 0,
                    }}
                >
                    { children }
                </div>
            </React.Fragment>
        )}
    />
)
*/

export default Layout