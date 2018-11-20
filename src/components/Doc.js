import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Header from './Header'

const Doc = ({ example, name, description }) => {
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
    </Box>
  )
}

Doc.propTypes = {
  example: PropTypes.node,
  name: PropTypes.string,
  description: PropTypes.node
}

export default Doc
