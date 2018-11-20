import React from "react";
import { Box } from "grommet";
import Section from '../components/Section'
import Nav from '../components/Nav'
import Hero from "../components/Hero";

const Home = () => {
  return (
    <Box>
      <Section>
        <Nav />
        <Hero />
      </Section>
    </Box>
  )
};

export default Home;
