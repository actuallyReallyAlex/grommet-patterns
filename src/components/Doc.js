import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import { push } from 'gatsby'
import { Box, Anchor, Text, Button } from 'grommet'
import Header from './Header'

const Doc = ({ photo, name, description, source, demo, tags }) => {
  return (
    <Box margin={{ bottom: 'large' }} width="xlarge" alignSelf="center">
      <Box
        alignSelf="center"
        pad="medium"
        elevation="large"
        margin={{ bottom: 'large' }}
      >
        <Img fixed={photo.childImageSharp.fixed} />
      </Box>
      <Header label={name} summary={description} />
      <Box alignSelf="center" direction="row-responsive" gap="large">
        {source && (
          <Anchor
            alignSelf="center"
            href={source}
            target="_blank"
            label={<Text size="large">Source</Text>}
          />
        )}
        {demo && (
          <Anchor
            alignSelf="center"
            href={demo}
            target="_blank"
            label={<Text size="large">Demo</Text>}
          />
        )}
      </Box>
      <Box
        margin={{ top: 'large' }}
        border={{ side: 'top', size: 'medium', color: 'brand' }}
      />
      <Box direction="row-responsive" gap="xsmall" justify="center">
        {tags.map(tag => (
          <Button key={tag} onClick={() => push(`/tag/${tag.toLowerCase()}`)}>
            <Box margin={{ top: 'xsmall' }} background="brand" round="xsmall" pad={{ horizontal: 'xsmall' }}>
              <Text size="small">{tag}</Text>
            </Box>
          </Button>
        ))}
      </Box>
    </Box>
  )
}

Doc.propTypes = {
  example: PropTypes.node,
  name: PropTypes.string,
  description: PropTypes.node,
  source: PropTypes.string,
  demo: PropTypes.string
}

export default Doc
