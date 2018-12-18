import React from 'react'
import { Box } from 'grommet'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import Page from '../components/Page'
import Classification from '../components/Classification'
import Section from '../components/Section'
import PatternPreview from '../components/PatternPreview'
import Item from '../components/Item'
import {
  Grow as SoonIcon
} from 'grommet-icons'

const Tag = ({ pageContext: { title, posts } }) => {

  return (
    <Layout
      title={`Tag - ${title} - Grommet Patterns`}
      description={`Tag - ${title} - Grommet Patterns`}
    >
    <Page>
      <Section>
        <Classification name={title}>
          {posts.map(post => <PatternPreview key={post.frontmatter.title} post={post.frontmatter} />)}
          <Item key="coming" name="Coming Soon" disabled>
            <Box>
              <SoonIcon size="xlarge" />
            </Box>
          </Item>
        </Classification>
      </Section>
    </Page>
  </Layout>
  )
}

export default Tag
