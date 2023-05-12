
import LoginContext from "./Context/LoginContext";
import Routing from "./component/Routing/Routing";
import Header from './component/Header/Header';
import Banner from "./component/Banner/Banner";
import Posts from "./component/Posts/Posts";
import Home from "./component/Home/Home";
import Login from "./component/Login/Login";
import Addpost from "./component/CreatePost/Addpost";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import TextContext from "./Context/TextContext";



function App() {
  return (
    <TextContext>
       <LoginContext>
 
 <BrowserRouter>

 <Routes>
 
           <Route path="/" element={<Home/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/addpost" element={<Addpost/>}></Route>
       </Routes>
 </BrowserRouter>

 

</LoginContext>

    </TextContext>

 
 
  );
}

export default App;
