import "./App.css";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';import Login from "./Screens/Login";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home"

function App() {
  return (
    <Router>
      <div id="App_MainContainer">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
