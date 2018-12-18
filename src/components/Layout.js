import React from 'react'
import { Grommet } from 'grommet'
import { Helmet } from 'react-helmet'


import { theme } from '../theme'
import Section from '../components/Section'
import Nav from '../components/Nav'



const Layout = ({ children, title, description }) => (
  <Grommet theme={theme}>
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
    </Helmet>
    <Section>
      <Nav />
    </Section>
    {children}
  </Grommet>
)

export default Layout
