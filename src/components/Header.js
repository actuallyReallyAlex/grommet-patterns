import React from "react";
import { Box, Heading, Paragraph } from "grommet";

const Header = ({ label, summary }) => {
  return (
    <Box align="center" margin={{ horizontal: "large" }}>
      <Heading level={1} size="large" textAlign="center" margin="none">
        {label}
      </Heading>
      {summary && (
        <Paragraph size="xxlarge" textAlign="center">
          {summary}
        </Paragraph>
      )}
    </Box>
  );
};

export default Header;
