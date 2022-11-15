import React from 'react'
import { useParams } from 'react-router-dom'

const ProductScreen = () => {
    let { slug } = useParams();
  return (
    <div>
          {slug}
    </div>
  )
}

export default ProductScreen
