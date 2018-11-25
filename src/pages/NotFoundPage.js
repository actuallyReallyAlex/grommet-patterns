import React from 'react'
import { Box } from 'grommet'
import Section from '../components/Section'
import Header from '../components/Header'
import NomNom from '../components/svg/NomNom'

const NotFoundPage = () => {
  return (
    <Section>
      <Box>
        <Header label="404! Page not Found" />
        <Box pad="medium" align="center">
          <NomNom />
        </Box>
      </Box>
    </Section>
  )
}

export default NotFoundPage
