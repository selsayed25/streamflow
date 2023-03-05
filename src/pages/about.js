import * as React from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    paragraph,
    smallHeading,
} from "../components/layout.module.css"

// const pageStyles = {
//     fontFamily: "Century Gothic",
// }

// const headingStyle = {
//     fontSize: 37,
//     fontWeight: 700, 
//     lineHeight: 5, 
//     marginTop: 0,
//     marginBottom: 10,
// }

// const secondHeadingStyle = {
//     fontSize: 23,
//     fontWeight: 700, 
//     marginTop: 10,
//     marginBottom: 0,
//     lineHeight: 1.25,
//     maxWidth: 500,
// }

// const descriptionStyle = {
//     fontSize: 17,
//     padding: 23,
//     fontWeight: 400, 
//     marginTop: 0,
//     marginBottom: 50,
//     maxWidth: 700,
// }

// const smallHeadingStyle = {
//     fontSize: 20,
// }

const AboutPage = () => {
    return (
        <center>
            <Layout pageTitle="About Streamflow">
                <span className={smallHeading}>What Does Streamflow Do?</span>
                <p className={paragraph}>Streamflow provides a comprehensive view of the current state of streams, including turbidity, discharge, pH, and other important indicators. By monitoring and reporting on the health of streams, Streamflow can help identify potential issues and enable people to take action to protect and restore these streams.</p>
                <span className={smallHeading}>Where Does Streamflow Get Its Data From?</span>
                <p className={paragraph}>Streamflow uses data from the USGS Stream Gage Network, which is a nationwide network of more than 12,000 stream gages that measure streamflow, water quality, and other parameters. Streamflow also uses data from the USGS National Water Information System, which is a nationwide network of more than 1,000,000 water-quality monitoring stations that measure water quality parameters such as temperature, pH, and dissolved oxygen.</p>
                <span className={smallHeading}>Who Is Behind Streamflow?</span>
                <p className={paragraph}>Streamflow is a project by a group of students at Thomas Jefferson High School for Science and Technology. The project was created for HackTJ 10.0, a 24 hour student-run hackathon. Here, meet each member of this hard-working project!</p>
                <span className={smallHeading}>Sami Elsayed</span>
                <p className={paragraph}>Sami is a sophomore at TJHSST and is the project manager for Streamflow. He is responsible for managing the project and ensuring that the team is on track to meet its goals. Sami is also responsible for the design and implementation of the Streamflow website. He worked on implementing the web map (Leaflet.js) into the website as well.</p>
                <span className={smallHeading}>Toan Do</span>
                <p className={paragraph}>Toan is also a sophomore at TJHSST and worked on backend for the program. He collected and processed the USGS data to and helped to display it on a map.</p>
                <span className={smallHeading}>Ryan Ghimire</span>
                <p className={paragraph}>Ryan, a sophomore at TJHSST aswell, worked on frontend for the program, creating the layout and UI of the webpage.</p>
            </Layout>
            
        </center>
    )
}

export default AboutPage

export const Head = () => (
    <>
        <meta name="description" content="About Streamflow" />
        <Seo title="About Streamflow" />
    </>
)