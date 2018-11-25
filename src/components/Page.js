import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'

const Page = ({ children }) => {
  return (
    <Box pad={{ horizontal: 'xlarge', vertical: 'large' }}>
      <Box>
        <Box margin={{ top: 'large' }}>{children}</Box>
      </Box>
    </Box>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
