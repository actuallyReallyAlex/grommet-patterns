import React from 'react'
import PropTypes from 'prop-types'
import { Box, Anchor, Text } from 'grommet'
import Header from './Header'

const Doc = ({ example, name, description, source, demo }) => {
  return (
    <Box margin={{ bottom: 'large' }} width="xlarge" alignSelf="center">
      <Box
        alignSelf="center"
        align="center"
        pad="medium"
        elevation="large"
        margin={{ bottom: 'large' }}
      >
        {example}
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
