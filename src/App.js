
import LoginContext from "./Context/LoginContext";
import Routing from "./component/Routing/Routing";
import Header from './component/Header/Header';
import Banner from "./component/Banner/Banner";
import Posts from "./component/Posts/Posts";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";



function App() {
  return (
 <LoginContext>
  <BrowserRouter>
  <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
  </BrowserRouter>

  

 </LoginContext>
 
 
  );
}

export default App;
