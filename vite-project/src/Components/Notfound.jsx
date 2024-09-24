import { useRouteError } from "react-router";
import "./Header.css";

function Notfound(){
    const error = useRouteError();
    const {data, status, statusText}=error;
    return(
        <>
           <div className="Error-msg">
           <h2> The URL which you entered is incorrect URL. It  does not match our DataBase [Incorrect Path]</h2>
           <h2>PLease Check the URL and enter the valid URL</h2>
           <div className="error-status">
           <h2> {data}</h2>  
            <h3>Status: {status}</h3>  
            <h3>StatusText: {statusText}</h3>
           </div>
            

           </div>
            
        </>
    )
}
export default Notfound;