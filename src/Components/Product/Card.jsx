import React from 'react';
import Products from './Products';
export const Card = (product) => {
  return (
    <>
    <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-3" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt="image"
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 15)}
                    </h5>
                    <p className="card-text lead fw-bold ">${product.price}</p>
                    <a href="#" className="btn btn-outline-dark">
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
    </>
  )
}
