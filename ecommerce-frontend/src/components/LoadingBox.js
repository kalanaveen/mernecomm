import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

const LoadingBox = () => {
  return (
    <Spinner animation='border' role='status' variant="info">
    </Spinner>
  )
}

export default LoadingBox
