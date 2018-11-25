import React from 'react'
import { Box } from 'grommet'
import Section from '../components/Section'
import Hero from '../components/Hero'
import Classification from '../components/Classification'
import Item from '../components/Item'
import { StatusPlaceholder as CardIcon, Grow as SoonIcon } from 'grommet-icons'

const HomePage = () => {
  return (
    <Box
      animation={[
        { type: 'zoomIn', duration: 500, delay: 100 + 100 * 0 },
        { type: 'fadeIn', duration: 500, delay: 100 * 0 }
      ]}
    >
      <Section>
        <Hero />
      </Section>
      <Section>
        <Classification name="Structure">
          <Item name="Card" screen="Card" linkTo="/card">
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

export default HomePage
