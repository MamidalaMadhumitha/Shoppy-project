import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Cartdetails from "./CartDetails";
import "./style.css";

function Cart(){
    // subscribing the slice
    const cartItems = useSelector((store)=>store.cart.items);
    if(cartItems == 0){
        return(
            <>
            <div className="backtohome">
            <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home </span>
            </Link>           
            </div>
            {/* displaying a message when cart is empty */}
           <center className="cart-msg">
           <h1 >Cart is Empty </h1>
           <h1>Add more items to your cart</h1>
           </center>            
            </>
        );

    }
    return(
        <>
        <div className="cart">
        <div className="backtohome">
          {/* creating a link to go back to home */}
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home </span>
          </Link>
        </div>
        <center>
          <h1 className="h1">Cart Items</h1>
        </center>
        <div className="cart-Items">
          {/* mapping through the cartitems to display all the added cart items by user */}
          {cartItems.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/cartitem/${item.id}`} key={item.id}>
                  <Cartdetails key={item.id} details={item}></Cartdetails>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
        </>
    );
    
}
export default Cart;