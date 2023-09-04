import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const API = "https://fakestoreapi.com/products";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      // const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const response = await fetch(`${API}/${id}`);

      // console.log(rat);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  //Loading Effect for website........it will show untill product is fetched from API.....
  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={350} />
        </div>
        <div className="col-md-6">
          <div className="col-md">
            <Skeleton height={100} />
          </div>
          <div className="col-md">
            <Skeleton height={150} />
          </div>
          <div className="col-md">
            <Skeleton height={50} />
          </div>
        </div>
      </>
    );
  };
  
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          {/* <h3>{product.rating.rate}</h3> */}
          {/* <p>{product.rating.rate}/{product.rating.count}</p> */}
          <p>{product.description}</p>
          <NavLink
            to={`/item/${product.id}`}
            className="btn btn-outline-dark m-2"
          >
            Add to Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="contaniner">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </>
  );
};

export default Product;
