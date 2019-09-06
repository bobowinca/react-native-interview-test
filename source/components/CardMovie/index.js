import React from 'react'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'
import { CardMovieContainer, CardMovieContent, CardMovieImage } from './CardMovie.styles'

/**
 * The CardMovie it's responsible by to render the
 * card with an image (thumnal)
 *
 * @export {FUNCTION}
 * @param {Object} props
 * @returns {JSX.Element}
 */
export default function CardMovie(props) {
  // properties
  const { thumbnail, onClick } = props

  // main render
  return (
    <CardMovieContainer onPress={() => onClick(props)}>
      <CardMovieContent>
        <CardMovieImage
          source={{
            uri: thumbnail,
            cache: FastImage.cacheControl.immutable
          }}
        />
      </CardMovieContent>
    </CardMovieContainer>
  )
}

// define the default properties
CardMovie.defaultProps = {
  thumbnail: 'https://via.placeholder.com/120x150',
  onClick: () => {}
}

// validate the default properties
CardMovie.propTypes = {
  thumbnail: PropTypes.string,
  onClick: PropTypes.func
}
