import React from 'react'
import { Box, Anchor, Text, Button } from 'grommet'
import { Grommet } from 'grommet-icons'

const Nav = () => {
  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      width="xlarge"
      alignSelf="center"
    >
      <Anchor
        href="#"
        onClick={() => alert('clicked')}
        icon={<Grommet size="large" />}
        label={<Text size="xlarge">grommet</Text>}
      />
      <Button
        plain
        href="/"
        type="button"
        label={
          <Box
            pad={{ vertical: 'small', horizontal: 'medium' }}
            round="xlarge"
            background="accent-2"
          >
            <Text size="large">patterns</Text>
          </Box>
        }
      />
    </Box>
  )
}

export default Nav
