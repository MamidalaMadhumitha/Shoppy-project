import { useEffect, useState } from "react";
import useCustomHook from "../utils/useCustomHook"
import { Link } from "react-router-dom";
import Header from "./Header"
import ProductDetails from "./ProductDetails";


function Productlist() {
  const [productsList, setProductsList] = useState([]);
  const [updatedProductsAre, setUpdatedProductsAre] = useState(productsList);
  // using custom hook from utils data
  const { data, error, loading } = useCustomHook(
    "https://dummyjson.com/products"
  );
  useEffect(() => {
    if (data) {
      setProductsList(data.products);
    }
  }, [data]);
  if (error) {
    return <p>Error in loading data: {error} </p>;
  }
  if (loading) {
    return <h2 className="load">Loading .....</h2>;
  }
  // setting filtered products
  function filteringProducts(filtered) {
    setUpdatedProductsAre(filtered);
  }

  return (
    <>
      <div>
        <div>
          <Header filterFunction={filteringProducts}></Header>
        </div>
        <div className="all-cards">
          {updatedProductsAre.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductDetails
                key={product.id}
                allDetails={product}
              ></ProductDetails>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export default Productlist;