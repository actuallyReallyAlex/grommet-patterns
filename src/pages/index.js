import React from 'react'
import { graphql } from 'gatsby'
import { Box } from 'grommet'
import { Grow as SoonIcon } from 'grommet-icons'

import Layout from '../components/Layout'
import Section from '../components/Section'
import Hero from '../components/Hero'
import Classification from '../components/Classification'
import Item from '../components/Item'
import PatternPreview from '../components/PatternPreview';

const HomePage = ({ data: { allMarkdownRemark }}) => {
  return (
    <Layout
      title="Grommet Patterns"
      description="Common patterns and layouts for applications using Grommet."
    >
      <Box
        animation={[
          { type: 'zoomIn', duration: 500, delay: 100 + 100 * 0 },
          { type: 'fadeIn', duration: 500, delay: 100 * 0 }
        ]}
      >
        <Section>
          <Hero />
        </Section>
        <Section>
          <Classification name="All">
            {allMarkdownRemark.edges.map(post => (
              <PatternPreview
                key={post.node.frontmatter.title}
                post={post.node.frontmatter} />
              ))}
            <Item key="coming" name="Coming Soon" disabled>
              <Box>
                <SoonIcon size="xlarge" />
              </Box>
            </Item>
          </Classification>
        </Section>
      </Box>
    </Layout>
  )
}

export default HomePage

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark( sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
