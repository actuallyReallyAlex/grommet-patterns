import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Search from './Search'

const SearchQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `}
  render={data => {
    const suggestions = Array.from(new Set([].concat.apply(
      [],
      data.allMarkdownRemark.edges.map(post => post.node.frontmatter.tags)
    )))
    return <Search suggestions={suggestions} />
  }}
  />
)

export default SearchQuery
