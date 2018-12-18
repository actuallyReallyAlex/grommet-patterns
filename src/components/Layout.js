import React from 'react'
import { Grommet } from 'grommet'

import { theme } from '../theme'
import Section from '../components/Section'
import Nav from '../components/Nav'



const Layout = (props) => (
  <Grommet theme={theme}>
    <Section>
      <Nav />
    </Section>
    {props.children}
  </Grommet>
)

export default Layout
