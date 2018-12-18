import React from 'react'

import { icons } from '../constants'
import Item from '../components/Item'
import { Box } from 'grommet'


const PatternPreview = ({ post }) => {
  const Icon = icons[post.title]
  return (
    <Item name={post.title} screen={post.title} linkTo={post.path}>
      <Box>
        <Icon size="xlarge" />
      </Box>
    </Item>
  )
}

export default PatternPreview
