import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Huybrechts Agency">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="Oh no"
        src="../images/gurapog.png"
      />
    </Layout>
  )
}

export default IndexPage