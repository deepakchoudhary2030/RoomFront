import Navbar from './Navbar/Navbar';
import './App.css';
import Home from './Common/Home';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import About from './Common/About';
import Login from './Common/Login';
import Signup from './Common/Signup';
import Contact from './Common/Contact';
import Ownerhome from './Owner/Ownerhome';
import UserSignup from './User/UserSignup';
import UserLogin from './User/UserLogin';

function App() {
  return (
    <div className="App">
      
  <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/owner/home' element={<Ownerhome/>}/>
      <Route path='/user/signup' element={<UserSignup/>}/>
      <Route path='/user/login' element={<UserLogin/>}/>
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
