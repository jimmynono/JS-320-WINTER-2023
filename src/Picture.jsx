import React from 'react'
import PropTypes from 'prop-types';

function Picture({ imgUrl, altTag }) {
    return <img src={imgUrl} alt={altTag} />
}

Picture.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired
}

export default Picture;
