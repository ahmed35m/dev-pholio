import React from "react";
import {  graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import Header from "../components/NavItems/header";
import Hero from "../components/Hero/hero";
import Projects from "../components/Projects/projects";
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Fade from 'react-reveal/Fade';

const RootIndex = ()=>{

 const data = useStaticQuery(graphql`
 query HomeQuery {
  allContentfulPerson(filter: {contentful_id: {eq: "80MJjzByLowmropAQmXqM"}}) {
    edges {
      node {
        name
        shortBio {
          shortBio
        }
        title
        email
        github
        contentful_id
      }
    }
  }
  allContentfulProject {
    edges {
      node {
        id
        description
        techStack
        name
        gitHubLink
      }
    }
  }
  allContentfulEducation {
    edges {
      node {
        id
        institute
      }
    }
  }
  allContentfulWork {
    nodes {
      employer
      endDate
      startDate
      title
      jobDescription
    }
  }
  allContentfulSocials {
    edges {
      node {
        id
        name
        link
      }
    }
  }
  allContentfulSkills {
    edges {
      node {
        name
        type
        category
      }
    }
  }
  site {
    siteMetadata {
      title
    }
  }
}
`);

const about={ info: data.allContentfulPerson,
            work: data.allContentfulWork,
          skills:data.allContentfulSkills}; 

return (
      <Layout>
        <Helmet title={data.site.siteMetadata.title} />  
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} data={data.allContentfulSocials} />
        <main>
          <Fade bottom>
          <Hero data={data.allContentfulPerson}/>
          <Projects data={data.allContentfulProject}/>
          <About data={about}/>
          <Contact />
          </Fade>
        </main>
        <footer>Made by <span>{' '}Muhammad Ahmed{' '}</span> with Gatsby
        </footer>
      </Layout>
    );
  }
  
export default RootIndex;


