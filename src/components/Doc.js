import React from 'react'
import PropTypes from 'prop-types'
import { Box, Anchor, Text } from 'grommet'
import Header from './Header'

const Doc = ({ example, name, description, link }) => {
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
      {link && (
        <Anchor
          alignSelf="center"
          href={link.url}
          target="_blank"
          label={<Text size="large">{link.label}</Text>}
        />
      )}
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
  link: PropTypes.object
}

export default Doc
