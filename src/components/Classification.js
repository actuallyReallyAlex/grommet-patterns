import React from "react";
import PropTypes from "prop-types";
import { Box, Heading, Grid } from "grommet";

const Classification = ({ children, index = 0, name }) => {
  return (
    <Box
      pad={{ vertical: "medium" }}
      animation={[
        { type: "zoomIn", duration: 500, delay: 100 + 100 * index },
        { type: "fadeIn", duration: 500, delay: 100 * index }
      ]}
    >
      <Heading level={2} margin={{ top: "none", horizontal: "small" }}>
        {name}
      </Heading>
      {Grid.available ? (
        <Grid
          columns={{ count: "fit", size: "medium" }}
          rows="small"
          gap={{ row: "medium" }}
        >
          {children}
        </Grid>
      ) : (
        <Box direction="row" wrap>
          {React.Children.map(children, child => (
            <Box basis="medium" pad="small">
              <Box basis="small">{child}</Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

Classification.propTypes = {
  name: PropTypes.string
};

export default Classification;
