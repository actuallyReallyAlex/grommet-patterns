import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Image, Text, Button } from 'grommet'
import Rating from './Rating'

class Card extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    reviews: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired
  }
  state = {}
  renderCardHeader = () => {
    const { name, type, price, reviews, description } = this.props
    let totalRating = undefined
    const hasReviews = reviews && reviews.length
    if (hasReviews) {
      totalRating =
        Math.round(
          (reviews.reduce(
            (rating, review, index) => rating + review.rating,
            0
          ) /
            reviews.length) *
            100
        ) / 100
    }
    return (
      <Box pad={{ horizontal: 'small' }}>
        <Box
          margin={{ top: 'small' }}
          direction="row"
          align="center"
          justify="between"
        >
          <Box>
            <Heading level={3} margin="none">
              {name}
            </Heading>
            <Text color="dark-5" size="small">
              {type} &#8226; {price}
            </Text>
          </Box>
          {totalRating ? (
            <Box align="end" justify="between" gap="xsmall">
              <Rating value={totalRating} />
              <Text color="dark-5" size="xsmall">
                {totalRating} {`(${reviews.length})`}
              </Text>
            </Box>
          ) : (
            <Box
              round="xsmall"
              pad={{ vertical: 'xxsmall', horizontal: 'medium' }}
              background="brand"
            >
              <Text size="xsmall">NEW</Text>
            </Box>
          )}
        </Box>
        <Text
          size="small"
          color="dark-5"
          margin={{ vertical: 'small' }}
          truncate
        >
          {description}
        </Text>
      </Box>
    )
  }

  renderCardFooter = () => {
    const { reviews, name } = this.props
    const hasReviews = reviews && reviews.length
    return (
      <Box
        tag="footer"
        direction="row"
        align="center"
        justify="between"
        pad={{ left: 'small', vertical: 'small' }}
      >
        {hasReviews ? (
          <Button
            a11yTitle={`Reviews for ${name}`}
            onClick={() => alert('clicked')}
          >
            <Box round="small">
              <Text color="brand" size="small">
                <strong>REVIEWS</strong>
              </Text>
            </Box>
          </Button>
        ) : (
          <span />
        )}
      </Box>
    )
  }

  render() {
    const { imageSrc } = this.props
    return (
      <Box round="xxsmall" elevation="small" overflow="hidden">
        <Box height="small">
          <Image src={imageSrc} fit="cover" />
        </Box>
        {this.renderCardHeader()}
        {this.renderCardFooter()}
      </Box>
    )
  }
}

export default Card
