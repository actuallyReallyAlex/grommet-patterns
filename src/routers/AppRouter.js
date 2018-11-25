import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'
import HomePage from '../pages/HomePage'
import CardPage from '../pages/CardPage'
import NotFoundPage from '../pages/NotFoundPage'
import Section from '../components/Section';
import Nav from '../components/Nav';

const AppRouter = () => (
  <BrowserRouter>
    <Grommet theme={grommet}>
      <Section>
        <Nav />
      </Section>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/card" component={CardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Grommet>
  </BrowserRouter>
)

export default AppRouter
