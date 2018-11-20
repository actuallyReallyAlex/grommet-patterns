import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Nav from './Nav'

const Page = ({ children, switchScreen }) => {
  return (
    <Box pad={{ horizontal: 'xlarge', vertical: 'large' }}>
      <Box>
        <Nav switchScreen={switchScreen} />
        <Box margin={{ top: 'large' }}>{children}</Box>
      </Box>
    </Box>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  switchScreen: PropTypes.func.isRequired
}

export default Page
