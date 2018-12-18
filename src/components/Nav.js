import React from 'react'
import { Box, Anchor, Text, Button, ResponsiveContext } from 'grommet'
import { Grommet } from 'grommet-icons'

import Search from './SearchQuery'

const Nav = () => {
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box
          direction="row"
          justify="between"
          align="center"
          width="xlarge"
          alignSelf="center"
        >
          <Anchor
            href="/"
            icon={<Grommet size="large" />}
            label={size !== 'small' && <Text size="xlarge">grommet</Text>}
          />
          <Search />
          <Button
            plain
            href="/"
            type="button"
            label={
              <Box
                pad={{ vertical: 'small', horizontal: 'medium' }}
                round="xlarge"
                background="accent-1"
              >
                <Text size="large">patterns</Text>
              </Box>
            }
          />
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

export default Nav
