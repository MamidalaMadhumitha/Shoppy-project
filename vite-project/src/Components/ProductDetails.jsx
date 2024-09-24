import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfStroke ,faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'

function ProductDetails(props) {
   
    return (
      <>
        <div className="all-cards">
          <div className="products" >
          <center><img className="image" src={props.allDetails.thumbnail} alt="Product_Image" width="160px" height="150px"/></center>
          <div className="product-details">
            <h3 className="title">{props.allDetails.title} </h3>
            <p className="price"><i>{props.allDetails.description}</i> </p>
            <h3 className="faIndianRupeeSign"><FontAwesomeIcon icon={faIndianRupeeSign} /> {props.allDetails.price} </h3>
            <h4 className="rating"> <FontAwesomeIcon icon={faStarHalfStroke} /> {props.allDetails.rating} </h4>
          </div>
          </div>
        </div>
      </>
    );
}
export default ProductDetails;