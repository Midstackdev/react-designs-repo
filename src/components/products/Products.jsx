import React from 'react'
import Product from '../product/Product'
import './products.css'
import { products } from '../../data'

const Products = () => {
  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's Midstacks</h1>
            <p className="pl-desc">
                Create portfolio of applications built with PHP, Javascript and Node.js.
                Including Frameworks like Laravel, ExpressJS, React.js and Vue.js on both the backend and the frontend.
                Also using relational databases like mysql, pgsql and mongodb as non-relational database for data storage.
            </p>
        </div>
        <div className="pl-list">
            {
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default Products