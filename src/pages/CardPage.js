import React from 'react'
import Page from '../components/Page'
import Doc from '../components/Doc'
import { Box, Image } from 'grommet'
import { Helmet } from 'react-helmet'

const CardPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Card - Grommet Patterns</title>
        <meta
          name="description"
          content="Cards contain content and actions about a single subject."
        />
      </Helmet>
      <Page>
        <Doc
          example={
            <Box>
              <Image
                a11yTitle="Screenshot of the Card pattern."
                src="./assets/card.png"
                fit="contain"
              />
            </Box>
          }
          name="Card"
          description={
            <span>
              Cards contain content and actions about a single subject.
            </span>
          }
          source="https://codesandbox.io/s/o7wjvrj3wy"
          demo="https://o7wjvrj3wy.codesandbox.io/"
        />
      </Page>
    </React.Fragment>
  )
}

export default CardPage
