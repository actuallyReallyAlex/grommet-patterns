import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Grid, ResponsiveContext } from 'grommet'

const Classification = ({ children, index = 0, name }) => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          pad={{ vertical: 'medium' }}
          animation={[
            { type: 'zoomIn', duration: 500, delay: 100 + 100 * index },
            { type: 'fadeIn', duration: 500, delay: 100 * index }
          ]}
        >
          <Heading level={2} margin={{ top: 'none', horizontal: 'small' }}>
            {name}
          </Heading>
          {Grid.available ? (
            <Grid
              columns={{
                count: 'fit',
                size: size === 'small' ? 'small' : 'medium'
              }}
              rows="small"
              gap={{ row: 'medium' }}
            >
              {children}
            </Grid>
          ) : (
            <Box direction="row" wrap>
              {React.Children.map(children, child => (
                <Box basis="small" pad="small">
                  <Box basis="small">{child}</Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

Classification.propTypes = {
  name: PropTypes.string
}

export default Classification
