import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Section from '../components/Section'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Classification from '../components/Classification'
import Item from '../components/Item'

import { StatusPlaceholder as CardIcon, Grow as SoonIcon } from 'grommet-icons'

const Home = ({ switchScreen }) => {
  return (
    <Box
      animation={[
        { type: 'zoomIn', duration: 500, delay: 100 + 100 * 0 },
        { type: 'fadeIn', duration: 500, delay: 100 * 0 }
      ]}
    >
      <Section>
        <Nav switchScreen={switchScreen} />
        <Hero />
      </Section>
      <Section>
        <Classification name="Structure">
          <Item name="Card" handleClick={switchScreen} screen="Card">
            <Box>
              <CardIcon size="xlarge" />
            </Box>
          </Item>
          <Item name="Coming Soon" disabled>
            <Box>
              <SoonIcon size="xlarge" />
            </Box>
          </Item>
          <Item name="Coming Soon" disabled>
            <Box>
              <SoonIcon size="xlarge" />
            </Box>
          </Item>
        </Classification>
      </Section>
    </Box>
  )
}

Home.propTypes = {
  switchScreen: PropTypes.func.isRequired
}

export default Home
