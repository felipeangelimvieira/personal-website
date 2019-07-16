import React from "react";
import Landing from "../components/landing";
import About from '../components/about';
import Timeline from '../components/resume';
import styles from '../styles/global.css';
import Header from '../components/Header';
import { graphql } from 'gatsby';
import { StickyContainer, Sticky } from 'react-sticky';
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'


export default ({data}) => (

<div className={styles.body}>
        <Header />
        <Landing data={data}/>
        <About />
        <Timeline/>
</div>)




export const query = graphql`
query {
    imageOne: file(relativePath: { eq: "background-crop1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
        }
      }
    }
  }
`