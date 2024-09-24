import "./App.css";
import { Outlet } from "react-router";
import store from "./Utils/store";
import {Provider} from "react-redux";


function App() {
 

  return (
    <>
    <Provider store={store}>
    <div className="appView">     
       {/* <Productlist/> */}
        <Outlet/>
      </div>

    </Provider>   
    </>
  )
};

export default App;
