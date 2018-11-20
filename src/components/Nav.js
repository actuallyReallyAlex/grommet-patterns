import React from "react";
import PropTypes from 'prop-types';
import { Box, Anchor, Text, Button } from "grommet";
import { Grommet } from "grommet-icons";

const Nav = ({ switchScreen }) => {
  return (
    <Box
      direction="row"
      justify="between"
      align="center"
      width="xlarge"
      alignSelf="center"
    >
      <Anchor
        href="#"
        onClick={() => alert('clicked')}
        icon={<Grommet size="large" />}
        label={<Text size="xlarge">grommet</Text>}
      />
      <Button
        plain
        onClick={() => switchScreen('Home')}        
        type="button"
        label={
          <Box
            pad={{ vertical: "small", horizontal: "medium" }}
            round="xlarge"
            background="accent-2"
          >
            <Text size="large">patterns</Text>
          </Box>
        }
      />
    </Box>
  );
};

Nav.propTypes = {
  switchScreen: PropTypes.func.isRequired
}

export default Nav;
