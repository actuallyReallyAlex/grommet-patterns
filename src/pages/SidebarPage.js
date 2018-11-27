import React from 'react'
import Page from '../components/Page'
import Doc from '../components/Doc'
import { Box, Image } from 'grommet'

const SidebarPage = () => {
  return (
    <Page>
      <Doc
        example={
          <Box>
            <Image
              a11yTitle="Screenshot of the Sidebar pattern."
              src="./assets/sidebar.png"
              fit="contain"
            />
          </Box>
        }
        name="Sidebar"
        description={
          <span>
            A sidebar with a fixed width and integration with react-router,
            showing active routes and a "not found" example.
          </span>
        }
        source="https://codesandbox.io/s/lp3y7rj1k9"
        demo="https://codesandbox.io/s/lp3y7rj1k9"
      />
    </Page>
  )
}

export default SidebarPage
