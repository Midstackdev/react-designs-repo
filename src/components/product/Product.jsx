import React from 'react'
import './product.css'
import Captured from '../../img/captured.png'

const Product = ({ product }) => {
  const { link } = product;
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={Captured} alt="" className="p-img"/>
      </a>
    </div>
  )
}

export default Product