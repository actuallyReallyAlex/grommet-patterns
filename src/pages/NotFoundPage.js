import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from 'grommet'
import Section from '../components/Section'
import Header from '../components/Header'
import NomNom from '../components/svg/NomNom'

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>404 - Grommet Patterns</title>
        <meta
          name="description"
          content="Oops! This page can not be found. Please try a different address."
        />
      </Helmet>
<Section>
      <Box>
        <Header label="404! Page not Found" />
        <Box pad="medium" align="center">
          <NomNom />
        </Box>
      </Box>
    </Section>
    </React.Fragment>
    
  )
}

export default NotFoundPage
