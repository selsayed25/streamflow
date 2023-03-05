import * as React from "react";
import Layout from "../components/layout"
import Seo from "../components/seo"

const pageStyles = {
    backgroundColor: "#0D67B5",
    color: "#F7F3E8",
    fontFamily: "Century Gothic",
}

const headingStyle = {
    fontSize: 37,
    fontWeight: 700, 
    lineHeight: 5, 
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: "#18263D",
}

const secondHeadingStyle = {
    fontSize: 23,
    fontWeight: 700, 
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
    maxWidth: 500,
}

const descriptionStyle = {
    fontSize: 17,
    padding: 23,
    fontWeight: 400, 
    marginTop: 0,
    marginBottom: 50,
    maxWidth: 700,
}

const smallHeadingStyle = {
    fontSize: 20,
}

const AboutPage = () => {
    return (
        <center>
            <Layout pageTitle="About">
                
                
            </Layout>
            <main style={ pageStyles }>
                <h1 style={ headingStyle }>About Streamflow</h1>
                <br />
                <span style={ secondHeadingStyle }>What Does Streamflow Do?</span>
                <p style={ descriptionStyle }>Streamflow provides a comprehensive view of the current state of the stream ecosystem, including water quality, flow rates, temperature, and other important indicators. By monitoring and reporting on the health of streams, Streamflow can help identify potential issues and enable people to take action to protect and restore these vital natural resources.</p>
                <span style={ secondHeadingStyle }>Where Does Streamflow Get Its Data From?</span>
                <p style={ descriptionStyle }>Streamflow uses data from the USGS Stream Gage Network, which is a nationwide network of more than 12,000 stream gages that measure streamflow, water quality, and other parameters. Streamflow also uses data from the USGS National Water Information System, which is a nationwide network of more than 1,000,000 water-quality monitoring stations that measure water quality parameters such as temperature, pH, and dissolved oxygen.</p>
                <span style={ secondHeadingStyle }>Who Is Behind Streamflow?</span>
                <p style={ descriptionStyle }>Streamflow is a project by a group of students at Thomas Jefferson High School for Science and Technology. The project was created for HackTJ 10.0, a 24 hour student-run hackathon. Here, meet each member of this hard-working project!</p>
                <span style={ smallHeadingStyle }>Sami Elsayed</span>
                <p style={ descriptionStyle }>Sami is a sophomore at TJHSST and is the project manager for Streamflow. He is responsible for managing the project and ensuring that the team is on track to meet its goals. Sami is also responsible for the design and implementation of the Streamflow website. He worked on implementing the web map (Leaflet.js) into the website, and programming to make the </p>
                <span style={ smallHeadingStyle }>Toan Do</span>
                <p style={ descriptionStyle }></p>
                <span style={ smallHeadingStyle }>Ryan Ghimire</span>
                <p style={ descriptionStyle }></p>
            </main>
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