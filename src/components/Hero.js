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
        label="common patterns and layouts for applications"
        summary={
          <span>
            Create attractive, reusable user interface elements allowing you to
            construct your experience with ease.
          </span>
        }
      />
    </Box>
  );
};

export default Hero;
