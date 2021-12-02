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
    customers: { nodes },
  } = data
  // give un elias of nodes called projects

  return (
    <Layout>
      <Hero />
      <About />
      <Projects projects={projects} title="latest projects" />
      <Slider customers={nodes} />
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

    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 150
                  height: 150
                  placeholder: TRACED_SVG
                )
              }
            }
          }
        }
        id
      }
    }
  }
`

export default HomePage
