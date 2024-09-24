import ReactDOM from 'react-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import useCustomHook from '../utils/useCustomHook';
import "./Header.css";



function Header(props){
    const [searchText, setSearchText] = useState("");
      // using custom hook from utils data
  const { data ,error , loading} = useCustomHook("https://dummyjson.com/products");
      // fetching the custom hook and checking if the data is fetched or not
  const [search, setSearch] = useState([]);
  useEffect(() => {
    if (data) {
      setSearch(data.products);
      filteredProducts();
    }
  }, [data]);
  // error msg for fecthing
  if (error) {
    return <p>Error in loading data: {error} </p>;
  }
  // loading msg for fecthing

  if (loading) {
    return <h2 className="load">Loading .....</h2>;
  }
  // function to target the input of updated text
  function updateSearch(e) {
    setSearchText(e.target.value);
  }
  //function for search filter for coverting into lowercase to uppercase
  function filteredProducts() {
    const filtered = search.filter((product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase())
    );
    props.filterFunction(filtered);
  }
    return (
        <>
         {/* navigation bar  */}
       <div className='header'>
        <div className='h2' >
         <span>Shobby Globe</span>
         </div>   
        
      <nav >
         <div className="nav-items">
            <Link to="/" className="Home">
              Home
            </Link>
           <Link to="/ProductDetails" ></Link>
           <Link to="/Checkout" ></Link>
           <Link to="/Cart"className='Cart' ><h3><FontAwesomeIcon icon={faCartShopping} className='faCartShopping' /> Cart</h3>
           </Link>       
         </div>       
      </nav>
      </div>

        <div className='search'>
          <input
            type="text"
            className="input-field"
            placeholder="Enter the Product Here"
            onChange={updateSearch}
          />
          <button onClick={() => filteredProducts()} className='button'>Search</button>
        </div>
        
    </>
    );
}
export default Header;