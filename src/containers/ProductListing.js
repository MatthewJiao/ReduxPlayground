import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .catch((err) => {
          console.log("Error");
        })
        .then((response) => {
          dispatch(setProducts(response.data));
        });
    };
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
