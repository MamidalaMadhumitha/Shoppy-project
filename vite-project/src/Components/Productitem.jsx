import { useParams } from "react-router-dom";
import useCustomHook from "../utils/useCustomHook";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke,faRotateLeft,faCalendarCheck,faTags,faTruck ,faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import "./Header.css"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice"; //dispatching the items concept
import { Link } from "react-router-dom"; 

function ProductItem() {
  const [prodDetail, setProdDetail] = useState([]);
  const [value, setValue] = useState(0);
//creating useparams to get parameters
  const params = useParams();
  // calling a reducer function using useDispatch
  const dispatch = useDispatch()
    // using custom hook from utils data
  const { data,error,loading } = useCustomHook(
    "https://dummyjson.com/products"
  );

  useEffect(() => {
    if (data) {
      setProdDetail(data.products.find((prod) => prod.id == params.id));
    }
  }, [data]);
   // error msg for custom hook fecthing
  if (error) {
    return <p>Error in loading data: {error} </p>
  }
    // loading msg for custom hook fecthing
  if (loading) {
    return <h2>Loading .....</h2>
  }
   // using reducers to add item to cart
  function handleAddItem(prodDetail){
    dispatch(addItem(prodDetail));
    setValue(value+1);
  }

  return (
    <>
      <div className="Items">
      <div className="backtohome">
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="faArrowLeft"/> <span>Back to Home </span>
          </Link>
      </div>
        <div className="productItem">
          <div className="productImage">
            <img src={prodDetail.thumbnail} alt="" height="300px" width="300px" />
            <div className="btn">
              <button onClick={() => handleAddItem(prodDetail)} >
              Add to cart ({value})
              </button>
              
            </div>
          </div>
          <div className="productData">
            <div className="container" >
            <h2 className="title" >{prodDetail.title}</h2>
            <h2 className="price">
              $ {prodDetail.price}
              <span><FontAwesomeIcon icon={faTags} className="faTags"/>{prodDetail.discountPercentage}</span></h2>
            <h2 className="Brand">
              <span >Brand : </span>
              <i>{prodDetail.brand}</i>{" "}
            </h2>
            <h2 className="faStarHalfStroke">
              <FontAwesomeIcon icon={faStarHalfStroke} /> {prodDetail.rating}
            </h2>
            <h3 className="faTruck">
              <FontAwesomeIcon icon={faTruck} /> {""}
            {prodDetail.shippingInformation} || 
            Quantity: {""}{prodDetail.minimumOrderQuantity} 
            </h3>{""}

            <h4 className="Availability">Availability : {prodDetail.stock}</h4>
            <h4 className="description">{prodDetail.description}</h4>  
            <span className="info"><FontAwesomeIcon className="icon" icon={faCalendarCheck} />{""} {prodDetail.warrantyInformation}</span>
            <span className="info"><FontAwesomeIcon className="icon" icon={faRotateLeft} /> {""}{prodDetail.returnPolicy}</span>
            </div>         
            
           
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductItem;