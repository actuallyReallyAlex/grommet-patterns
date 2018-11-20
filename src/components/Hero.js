import React from "react";
import { Box } from "grommet";
import Header from "../components/Header";
import Wireframe from "./svg/Wireframe";

const Hero = () => {
  return (
    <Box>
      <Box pad="medium" align="center">
        <Wireframe />
      </Box>
      <Header
        label="streamline the way you develop apps"
        summary={
          <span>
            build responsive and accessible mobile-first projects for the web
            with an easy to use component library
          </span>
        }
      />
    </Box>
  );
};

export default Hero;
