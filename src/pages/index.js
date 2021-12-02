import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  Projects,
  Survey,
  Slider,
  GridProjects,
} from '../components'
import Title from '../components/Title'

const HomePage = ({ data }) => {
  // access the query
  // console.log(data)
  const {
    allAirtable: { nodes: projects },
  } = data
  // give un elias of nodes called projects

  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title='latest projects' />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 3
      sort: { fields: data___data, order: DESC }
    ) {
      nodes {
        id
        data {
          data
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
